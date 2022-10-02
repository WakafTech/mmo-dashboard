import {ShortLink} from "../../types/short-link";
import supabase from "./client";
import {User} from "../../types/user";
import {PostgrestSingleResponse} from "@supabase/supabase-js";
import {PostgrestFilterBuilder} from "@supabase/postgrest-js";

export enum Table {
  Users = "users",
  Organisations = "organisations",
  ShortLinks = "short-links"
}

interface QueryGet<T, K extends keyof T> {
  table: Table;
  paramsKey: K;
  paramsValue: T[K];
}

interface QueryInsert<T> {
  table: Table,
  payload: T
}


/* -------------------------------------------------- */
/*                 Generic Queries                    */
/* -------------------------------------------------- */

const getSingle = async <T, K extends keyof T>(query: QueryGet<T, K>)
  : Promise<PostgrestSingleResponse<T>> => {
  const {table, paramsKey, paramsValue} = query
  return supabase
    .from<T>(table)
    .select("*")
    .eq(paramsKey, paramsValue)
    .limit(1)
    .single()
}


const getAll = async <T, K extends keyof T>(query: QueryGet<T, K>)
  : Promise<PostgrestFilterBuilder<T>> => {
  const {table, paramsKey, paramsValue} = query
  return supabase
    .from<T>(table)
    .select("*")
    .eq(paramsKey, paramsValue);
}

const insert = async <T>(query: QueryInsert<T>)
  : Promise<PostgrestFilterBuilder<T>> => {
  const {table, payload} = query
  return supabase
    .from<T>(table)
    .insert(payload)
}


/* --------------------------------------------- */
/*                 Get Queries                   */
/* --------------------------------------------- */

const getSingleUser = async (email: string) => {
  return await getSingle<User, "email">({
    table: Table.Users,
    paramsKey: "email",
    paramsValue: email
  })
}

const getAllShortLinks = async (organisation: string) => {
  return await getAll<ShortLink, "organisation">({
    table: Table.ShortLinks,
    paramsKey: "organisation",
    paramsValue: organisation
  })
}

/* --------------------------------------------- */
/*                 Insert Queries                */
/* --------------------------------------------- */

const insertShortLink = async (shortLink: ShortLink) => {
  return await insert<ShortLink>({
    table: Table.ShortLinks,
    payload: shortLink
  })
  // return status
}

/* ---------------------------------- */
/*               Utils                */
/* ---------------------------------- */


export const Db = {
  getSingle,
  getSingleUser,
  getAllShortLinks,
  insertShortLink
};
