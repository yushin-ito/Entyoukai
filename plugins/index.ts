import fs from "fs";
import path from "path";

import type { OutputOptions, Plugin } from "rollup";
import subsetFont from "subset-font";

export type PluginOptions = {
  verbose?: boolean;
};

const defaultPluginOptions: PluginOptions = {
  verbose: false
};

const getFiles = (dir: string, ext: string): string[] =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((file) => file.endsWith(ext))
    : [];

const generateBundle = async (
  _options: OutputOptions,
  bundle: Record<string, any>,
  pluginOptions: PluginOptions
) => {
  const { verbose } = pluginOptions;

  const fontFiles = getFiles("public/fonts", ".woff2").map((file) =>
    path.join("public/fonts", file)
  );

  const contentFiles = getFiles("public/contents", ".json").map((file) =>
    path.join("public/contents", file)
  );

  if (verbose) {
    console.log("Subsetting fonts...");
    console.log("Font files:", fontFiles);
    console.log("Content files:", contentFiles);
  }

  const glyphSetByAssets = Object.values(bundle)
    .filter((info) => /\.(js|css|html?)$/.test(info.fileName))
    .flatMap((info) => [
      ...new Set(
        info.type === "chunk"
          ? info.code
          : typeof info.source === "string"
            ? info.source
            : ""
      )
    ]);

  const glyphSetByContents = contentFiles.flatMap((file) => [
    ...new Set(Object.values(fs.readFileSync(file, "utf-8")).join(""))
  ]);

  const glyphSet = new Set([...glyphSetByAssets, ...glyphSetByContents]);

  if (!fs.existsSync("dist/fonts")) {
    fs.mkdirSync("dist/fonts", { recursive: true });
  }

  for (const fontPath of fontFiles) {
    const fontBuffer = fs.readFileSync(fontPath);
    const subset = await subsetFont(fontBuffer, [...glyphSet].join(""), {
      targetFormat: "woff2"
    });

    const subsetPath = path.join("dist/fonts", path.basename(fontPath));
    fs.writeFileSync(subsetPath, Buffer.from(subset));

    if (verbose) {
      console.log(`Font processed: ${path.basename(fontPath)}`);
      console.log(`Subset saved at: ${subsetPath}`);
    }
  }
};
const fontSubsetter = (options?: PluginOptions): Plugin => {
  const pluginOptions = { ...defaultPluginOptions, ...options };
  return {
    name: "font-subsetter",
    generateBundle: async (_options, bundle) =>
      await generateBundle(_options, bundle, pluginOptions)
  };
};

export default fontSubsetter;
