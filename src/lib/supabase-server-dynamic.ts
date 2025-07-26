// lib/supabase-server-dynamic.ts
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from './database.types'

export async function createDynamicClient() {
  const cookieStore = cookies() // ❌ tanpa await
  return createServerComponentClient<Database>({
    cookies: () => cookieStore,
  })
}
