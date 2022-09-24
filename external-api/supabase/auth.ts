import supabase from "./client";

const handleSignIn = async (email: string) => {
  return await supabase.auth.signIn({email}, {shouldCreateUser: false});
}

export const Auth = {
  handleSignIn
}
