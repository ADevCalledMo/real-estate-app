import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Layout from "../components/Layout";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({ properties, bg }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Layout>
      <Box>
        <Flex
          cursor="pointer"
          bg={bg}
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}

        <Text fontSize="2xl" p="4" fontWeight="bold">
          Properties {router.query.purpose}
        </Text>
        {/* <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex> */}
      </Box>
    </Layout>
  );
};

export default Search;
