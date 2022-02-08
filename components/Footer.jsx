import { Box, Text } from "@chakra-ui/react";

const Footer = ({ bg, textColor }) => (
  <Box
    textAlign="center"
    p="5"
    backgroundColor={bg}
    color={textColor}
    borderTop="1px"
    borderColor="gray.100"
  >
    <Text> 2022 Mozes Inc</Text>
  </Box>
);

export default Footer;
