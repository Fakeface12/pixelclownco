import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Definisikan tipe untuk data webhook dari Saweria
interface WebhookBody {
  transaction_id?: string | string[] | null;
  amount?: number | null;
  project_id?: string | string[] | null;
}

// Definisikan tipe untuk paymentData agar sesuai dengan skema tabel
interface PaymentData {
  user_id: string;
  status: string;
  created_at: string;
  project_id?: string;
  transaction_id?: string;
}

export async function POST(request: Request) {
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

  const body = await request.json() as WebhookBody;
  console.log('Webhook body received (raw):', JSON.stringify(body, null, 2));

  // Ekstrak data dari webhook (hapus amount karena tidak digunakan)
  const { transaction_id, project_id } = body || {};

  // TODO: Ganti user ID ini dengan logika auth atau lookup user jika tersedia
  const userId = 'USER_ID_HERE'; // HARUS kamu ganti!

  // Fungsi untuk mengubah data jadi string aman
  const toSafeString = (value: string | string[] | null | undefined): string => {
    if (Array.isArray(value)) {
      const flattened = value.flat(Infinity).filter((item): item is string => item != null && item !== '');
      return flattened.length > 0 ? flattened[0] : '';
    }
    if (value === null || value === undefined || value === '') {
      return '';
    }
    return String(value);
  };

  const safeProjectId = toSafeString(project_id);
  const safeTransactionId = toSafeString(transaction_id);

  // Debug tipe data
  console.log('Processed data types:', {
    user_id: typeof userId,
    project_id: typeof safeProjectId,
    transaction_id: typeof safeTransactionId,
    status: 'string',
    created_at: 'string',
  });

  const paymentData: PaymentData = {
    user_id: userId,
    status: 'paid',
    created_at: new Date().toISOString(),
    ...(safeProjectId ? { project_id: safeProjectId } : {}),
    ...(safeTransactionId ? { transaction_id: safeTransactionId } : {}),
  };

  console.log('Final paymentData:', paymentData);

  const { error } = await supabase.from('payments').upsert(
    [paymentData],
    {
      onConflict: 'user_id', // ✅ FIXED: harus string, bukan array
    }
  );

  if (error) {
    console.error('Error upserting payment:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}