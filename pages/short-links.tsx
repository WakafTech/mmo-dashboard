import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextApiRequest } from "next";
import { Db } from "../external-api/supabase/db";
import { ShortLink } from "../types/short-link";
import { AppShell } from "../ui/AppShell";
import { ShortLinkItem } from "../ui/ShortLinkItem";

export async function getServerSideProps(request: NextApiRequest) {
  const userOrganisationId = "masjid-wak-tanjong";
  const shortLinks = await Db.getShortLinks(userOrganisationId);

  return {
    props: {
      shortLinks,
    },
  };
}

interface Props {
  shortLinks: ShortLink[];
}

const ShortLinks = ({ shortLinks }: Props) => {
  return (
    <AppShell>
      <Heading>Short Links</Heading>
      <SimpleGrid columns={[1, null, 2, 3, 4]} spacing="6" py={"20px"}>
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
