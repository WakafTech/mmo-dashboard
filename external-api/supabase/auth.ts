import supabase from "./client";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { clientConfig } from "../../configs/app-config";

const handleSignIn = async (email: string) => {
  return await supabase.auth.signIn(
    { email },
    { shouldCreateUser: false, redirectTo: clientConfig.app.baseUrl }
  );
};

const handleSignOut = async () => {
  return await supabaseClient.auth.signOut();
};

export const Auth = {
  handleSignIn,
  handleSignOut,
};
