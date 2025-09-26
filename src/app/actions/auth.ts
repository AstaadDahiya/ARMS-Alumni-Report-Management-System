
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const role = formData.get('role') as string;

  // Since we are not using a database, we'll just redirect to the correct dashboard.
  // In a real app, you would validate email and password here.

  revalidatePath('/', 'layout')
  
  if (role === 'student') {
    redirect('/dashboard/student')
  } else if (role === 'alumni') {
    redirect('/dashboard/alumni')
  } else if (role === 'admin') {
    redirect('/dashboard/admin')
  } else if (role === 'government') {
    redirect('/dashboard/government')
  } else {
    // Fallback for any other case
    redirect('/dashboard')
  }
}

export async function logout() {
    // In a real app, you would clear the user's session here.
    // For now, we'll just redirect to the homepage.
    redirect('/')
}
