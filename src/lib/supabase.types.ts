// lib/supabase.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      project: {
        Row: {
          id: string
          title: string
          slug: string
          image_url: string
          description: string
          tech: string[] // <- pastikan format array of string di Supabase
          video: string
          sourcecode: string
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          image_url?: string
          description: string
          tech: string[]
          video: string
          sourcecode: string
          price?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['project']['Insert']>
      }
    }
    Views: Record<string, never> // Ganti {} dengan Record<string, never>
    Functions: Record<string, never> // Ganti {} dengan Record<string, never>
    Enums: Record<string, never> // Ganti {} dengan Record<string, never>
  }
}