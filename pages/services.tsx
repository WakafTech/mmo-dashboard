import {getUser, withPageAuth} from "@supabase/auth-helpers-nextjs";
import {Cookie} from "../configs/cookie";
import {AppShell} from "../ui/AppShell";
import {Button, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import Link from "next/link";
import {Service} from "../types/service";
import {ServiceItem} from "../ui/ServiceItem";

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
  async getServerSideProps(context) {
    const {user: {email}} = await getUser(context)
    const organisationId = await Cookie.getOrganisationId(context, email)
    // get all services

    return {
      props: {
        services: [],
      },
    };
  },
})

interface Props {
  services: Service[];
}

const Services = ({services}: Props) => {
  return (
    <AppShell>
      <Flex justifyContent={"space-between"}>
        <Heading>Services</Heading>
        <Link href={"/create-service"}><Button colorScheme={"teal"}>Create Service</Button></Link>
      </Flex>
      <SimpleGrid columns={[1, null, null, 2, 3, 4]} spacing="6" py={"40px"}>
        {services?.map((service) => (
          <ServiceItem
            title={service.title}
            description={service.description}
            images={service.images}
            key={service.title}
          />
        ))}
      </SimpleGrid>
    </AppShell>
  );
};

export default Services;