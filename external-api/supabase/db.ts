import {ShortLink} from "../../types/short-link";
import supabase from "./client";

const getShortLinks = async (
  organisation: string
): Promise<ShortLink[] | null> => {
  const {data, error} = await supabase
    .from("short-links")
    .select("*")
    .eq("organisation", organisation);

  if (!data || data?.length < 1 || error) {
    return null;
  }

  return data;
};

const getUser = async (userEmail: string) => {
  const {data, error} = await supabase
    .from("users")
    .select("*")
    .eq("email", userEmail)
    .limit(1)
    .single()

  if (error) return null
  return data;
}

const createShortLinks = async (userEmail: string, path: string, destination: string) => {
  const {organisation} = await getUser(userEmail);
  const {error, statusText} = await supabase
    .from("short-links")
    .insert({ path, destination, created_by: userEmail, organisation })
  if (error) return error;
  else return statusText
}

export const Db = {
  getShortLinks,
  getUser,
  createShortLinks
};
