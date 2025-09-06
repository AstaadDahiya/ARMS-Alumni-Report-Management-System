
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string;

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    const errorMessage = "Missing Supabase credentials. Please check your environment variables."
    return redirect(`/?message=${encodeURIComponent(errorMessage)}`);
  }

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect(`/?message=${error.message}`)
  }

  revalidatePath('/', 'layout')
  
  if (role === 'student') {
    redirect('/dashboard/student')
  } else if (role === 'alumni') {
    redirect('/dashboard')
  } else if (role === 'admin') {
    redirect('/dashboard')
  } else {
    // Fallback for any other case
    redirect('/dashboard')
  }
}

export async function logout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/')
}
