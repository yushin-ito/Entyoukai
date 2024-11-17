import fs from "fs";
import path from "path";

import type { Plugin } from "rollup";
import subsetFont from "subset-font";

export type PluginOptions = {
  verbose?: boolean;
  fontDir?: string;
  outputDir?: string;
  outputFormat?: "woff2" | "woff";
  basedOn?: {
    dir: string;
    ext: string;
  }[];
  defaultGlyphs?: string;
  excludeGlyphs?: string;
};

const defaultPluginOptions: PluginOptions = {
  verbose: false,
  fontDir: "public/fonts",
  outputDir: "dist/fonts",
  outputFormat: "woff2"
};

const getFiles = (dir: string, ext: string): string[] =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((file) => file.endsWith(ext))
    : [];

const generateBundle = async (
  bundle: Record<string, any>,
  pluginOptions: PluginOptions
) => {
  const {
    verbose,
    fontDir,
    outputDir,
    outputFormat,
    basedOn,
    defaultGlyphs,
    excludeGlyphs
  } = pluginOptions;

  if (!fontDir || !outputDir || !basedOn) return;

  const fontFiles = getFiles(fontDir, ".woff2").map((file) =>
    path.join(fontDir, file)
  );

  const baseFiles = basedOn.flatMap(({ dir, ext }) =>
    getFiles(dir, `.${ext}`).map((file) => path.join(dir, file))
  );

  if (verbose) {
    console.log(`\nfont files(${fontFiles.length})`);
    fontFiles.forEach((file) => {
      console.log(`- ${file}`);
    });

    console.log(`\nbase files(${baseFiles.length})`);
    baseFiles.forEach((file) => {
      console.log(`- ${file}`);
    });

    console.log("\nsubsetting fonts...\n");
  }

  const bundleGlyphSet = Object.values(bundle)
    .filter((info) => /\.(js|css|html?)$/.test(info.fileName))
    .flatMap((info) =>
      info.type === "chunk"
        ? [...new Set(info.code)]
        : [...new Set(info.source)]
    );

  const baseGlyphSet = baseFiles.flatMap((file) => [
    ...new Set(Object.values(fs.readFileSync(file, "utf-8")).join(""))
  ]);

  const glyphSet = new Set([
    ...bundleGlyphSet,
    ...baseGlyphSet,
    ...(defaultGlyphs || "").split("")
  ]);

  if (excludeGlyphs) {
    excludeGlyphs.split("").forEach((glyph) => glyphSet.delete(glyph));
  }

  if (!fs.existsSync(fontDir)) {
    fs.mkdirSync(fontDir, { recursive: true });
  }

  for (const fontPath of fontFiles) {
    const fontBuffer = fs.readFileSync(fontPath);
    const subset = await subsetFont(fontBuffer, [...glyphSet].join(""), {
      targetFormat: outputFormat
    });

    const subsetPath = path.join(outputDir, path.basename(fontPath));
    fs.writeFileSync(subsetPath, Buffer.from(subset));

    if (verbose) {
      const fontSize = (fontBuffer.length / 1024).toFixed(2);
      const subsetSize = (subset.length / 1024).toFixed(2);
      const reduction = (
        ((fontBuffer.length - subset.length) / fontBuffer.length) *
        100
      ).toFixed(2);

      if (verbose) {
        console.log(
          `${path.basename(fontPath)}: ${fontSize}KB -> ${subsetSize}KB (${reduction}%)`
        );
      }
    }
  }

  if (verbose) {
    console.log("\nsubsetting fonts completed.\n");
  }
};

const fontSubsetter = (options?: PluginOptions): Plugin => {
  const pluginOptions = { ...defaultPluginOptions, ...options };
  return {
    name: "font-subsetter",
    generateBundle: async (_options, bundle) =>
      await generateBundle(bundle, pluginOptions)
  };
};

export default fontSubsetter;
