import { ShortLink } from "../../types/short-link";
import supabase from "./client";

const getShortLinks = async (
  organisation: string
): Promise<ShortLink[] | null> => {
  const { data, error } = await supabase
    .from("short-links")
    .select("*")
    .eq("organisation", organisation);

  if (!data || data?.length < 1 || error) {
    return null;
  }

  return data;
};

export const Db = {
  getShortLinks,
};
