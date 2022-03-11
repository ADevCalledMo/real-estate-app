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
          onClick={() => setSearchFilters(!searchFilters)}
          cursor="pointer"
          bg={bg}
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}

        <Text fontSize="2xl" p="4" fontWeight="bold">
          Properties {router.query.purpose}
        </Text>
        <Flex flexWrap="wrap">
          {[].map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        {[].length === 0 && (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            marginTop="5"
            marginBottom="5"
          >
            <Text fontSize="xl" marginTop="3">
              No Result Found.
            </Text>
          </Flex>
        )}
      </Box>
    </Layout>
  );
};

export default Search;
