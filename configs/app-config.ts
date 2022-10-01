export const clientConfig = {
  app: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  }
}
