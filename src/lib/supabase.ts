import { createClient } from '@supabase/supabase-js'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Letakkan type setelah deklarasi supabase,
// supaya nggak circular pas di-import

export type Database = {
  public: {
    Tables: {
      project: {
        Row: {
          id: number
          title: string
          slug: string
          description: string
          image_url: string
          tech: string[]
          sourcecode: string
          video: string
          created_at: string
        }
        Insert: {
          title: string
          slug: string
          description: string
          image_url: string
          tech: string[]
          sourcecode: string
          video: string
          created_at?: string // Opsional karena bisa diatur otomatis oleh Supabase
        }
        Update: Partial<{
          title?: string
          slug?: string
          description?: string
          image_url?: string
          tech?: string[]
          sourcecode?: string
          video?: string
          created_at?: string
        }>
      }
    }
    Views: Record<string, never> // Ganti {} dengan Record<string, never> untuk menunjukkan tidak ada view
    Functions: Record<string, never> // Ganti {} dengan Record<string, never> untuk menunjukkan tidak ada fungsi
  }
}