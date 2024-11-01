/// <reference types="vite/client" />

interface Env {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: Env;
}
