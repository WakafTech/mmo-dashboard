import supabase from "./client";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { clientConfig } from "../../configs/app-config";

const handleSignIn = async (email: string, redirectTo = clientConfig.app.baseUrl) => {
  return await supabase.auth.signIn(
    { email },
    { shouldCreateUser: false, redirectTo }
  );
};

const handleSignOut = async () => {
  return await supabaseClient.auth.signOut();
};

export const Auth = {
  handleSignIn,
  handleSignOut,
};
