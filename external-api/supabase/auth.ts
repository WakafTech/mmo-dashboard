import supabase from "./client";
import {NextRouter} from "next/router";

const handleSignIn = async (email: string) => {
  return await supabase.auth.signIn({email}, {shouldCreateUser: false});
}

const handleOnAuthStateChange = (router: NextRouter) => {
  supabase.auth.onAuthStateChange((_event) => {
    if (_event !== 'SIGNED_OUT') {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  });
}

export const Auth = {
  handleSignIn,
  handleOnAuthStateChange
}
