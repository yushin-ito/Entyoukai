import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/schema";

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
