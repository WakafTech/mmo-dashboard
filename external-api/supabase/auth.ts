import supabase from "./client";
import { supabaseClient } from '@supabase/auth-helpers-nextjs'


const handleSignIn = async (email: string) => {
  return await supabase.auth.signIn({email}, {shouldCreateUser: false, redirectTo: "https://go.mmo.sg"});
}

const handleSignOut = async () => {
  return await supabaseClient.auth.signOut()
}

export const Auth = {
  handleSignIn,
  handleSignOut,
}
