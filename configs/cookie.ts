import {deleteCookie, getCookie, setCookie} from "cookies-next";
import {Db} from "../external-api/supabase/db";
import {GetServerSidePropsContext} from "next/types";

export const COOKIE_KEY_ORGANISATION_ID = "organisationId"
export const COOKIE_KEY_USER_ID = "userId"

const getOrganisationId = async (context: GetServerSidePropsContext, email: string): Promise<string> => {
  const organisationId = getCookie(COOKIE_KEY_ORGANISATION_ID, context)
  if (organisationId)
    return <string>organisationId
  const {body} = await Db.getSingleUser(email)
  const {organisation} = body!

  setCookie(COOKIE_KEY_ORGANISATION_ID, organisation, context)
  return organisation
}

const deleteOrganisationId = () => deleteCookie(COOKIE_KEY_ORGANISATION_ID)

export const Cookie = {
  getOrganisationId,
  deleteOrganisationId
}