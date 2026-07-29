import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Substitua pelas chaves que você copiou no Passo 1
const supabaseUrl = 'https://dxiwcamaefjdrrnjoizd.supabase.co'
const supabaseKey = 'sb_publishable_m7kfT4_86taO3F3Hs2CPjw_nzwGvwvn'

export const supabase = createClient(supabaseUrl, supabaseKey)