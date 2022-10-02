import {Button, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import Link from "next/link";
import {Db, Table} from "../external-api/supabase/db";
import {ShortLink} from "../types/short-link";
import {AppShell} from "../ui/AppShell";
import {ShortLinkItem} from "../ui/ShortLinkItem";
import {getUser, withPageAuth} from "@supabase/auth-helpers-nextjs";
import {Cookie} from "../configs/cookie";

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
  async getServerSideProps(context) {
    const {user: {email}} = await getUser(context)
    const organisationId = await Cookie.getOrganisationId(context, email)
    const {data: shortLinks} = await Db.getAllShortLinks(organisationId);

    return {
      props: {
        shortLinks,
      },
    };
  },
})


interface Props {
  shortLinks: ShortLink[];
}

const ShortLinks = ({shortLinks}: Props) => {
  return (
    <AppShell>
      <Flex justifyContent={"space-between"}>
        <Heading>Short Links</Heading>
        <Link href={"/create-short-link"}><Button colorScheme={"teal"}>Create Short Link</Button></Link>
      </Flex>
      <SimpleGrid columns={[1, null, null, 2, 3, 4]} spacing="6" py={"40px"}>
        {shortLinks?.map((shortLink) => (
          <ShortLinkItem
            path={shortLink.path}
            destination={shortLink.destination}
            key={shortLink.path}
          />
        ))}
      </SimpleGrid>
    </AppShell>
  );
};

export default ShortLinks;
