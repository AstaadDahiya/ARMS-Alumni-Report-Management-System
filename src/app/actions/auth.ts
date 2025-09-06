
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string;
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
  } else {
    redirect('/dashboard')
  }
}
