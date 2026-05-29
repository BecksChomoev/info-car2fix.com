'use client'

import { useActionState } from 'react'
import { Lock, Loader2 } from 'lucide-react'
import { loginAction } from '@/app/crm/actions'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, {})

  return (
    <form
      action={formAction}
      className="w-full max-w-sm p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-center gap-2 mb-1">
        <Lock className="w-5 h-5 text-brand-blue" />
        <h1 className="font-display font-bold text-xl text-gray-900 dark:text-white">Car2Fix CRM</h1>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Enter the team password to access the lead board.
      </p>

      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        autoFocus
        autoComplete="current-password"
        className="w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-brand-blue text-gray-900 dark:text-white outline-none transition-colors"
      />

      {state?.error && <p className="mt-3 text-sm text-brand-red">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full py-3.5 rounded-xl font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
      >
        {pending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Signing in…</span>
          </>
        ) : (
          <span>Sign in</span>
        )}
      </button>
    </form>
  )
}
