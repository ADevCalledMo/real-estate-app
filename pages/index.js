import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default function Home() {

  
  return (
    <Layout>
      <Box>
        <Banner
          purpose="Rent a Home"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Text fontSize="3xl"> Properties for rent go here! </Text>
        </Flex>
        <Banner
          purpose="BUY A HOME"
          title1="Find, Buy & Own Your"
          title2="Dream Home"
          desc1="Explore from Apartments, land, builder floors,"
          desc2="villas and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Text fontSize="3xl"> Properties for sale go here! </Text>
        </Flex>
      </Box>
    </Layout>
  );
}
