import { createClient } from "@supabase/supabase-js";

export const supabase =createClient(
    "https://fihzclafhwrflpbaprcn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpaHpjbGFmaHdyZmxwYmFwcmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MzYzNDEsImV4cCI6MjAyNjAxMjM0MX0.X1f9HfldQwiqVggrBccttWfBpkfVe-V4xrQPKpe0QTQ"
    )