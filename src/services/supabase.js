import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://efybwwsknjwfqzhsipvg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeWJ3d3Nrbmp3ZnF6aHNpcHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNTMzMzQsImV4cCI6MjAzNTYyOTMzNH0.M58N8vmcZxRrAf_UoebNhwsp_P6PNLwAB7KiPEIDzlM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
