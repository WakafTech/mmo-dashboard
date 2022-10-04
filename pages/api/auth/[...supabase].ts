import { handleAuth } from '@supabase/auth-helpers-nextjs'

export default handleAuth({ logout: { returnTo: '/' }, cookieOptions: { domain: "mmo.sg", sameSite: "lax",} })
