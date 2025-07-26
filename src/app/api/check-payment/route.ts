import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const projectId = searchParams.get('projectId')
  const userId = searchParams.get('userId')

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        async get(name: string) {
          return (await cookies()).get(name)?.value || null
        },
      },
    }
  )

  const { data, error } = await supabase
    .from('payments')
    .select('status')
    .eq('project_id', projectId || '')
    .eq('user_id', userId || '')
    .single()

  if (error || !data) {
    return NextResponse.json({ status: 'unpaid' })
  }

  return NextResponse.json({ status: data.status })
}