import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = ({ bg, textColor }) => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100" backgroundColor={bg}>
    <Box fontSize="3xl" color={textColor} fontWeight="bold">
      <Link href="/" paddingLeft="2">
        United Arab Emirates Real Estate
      </Link>
    </Box>
    <Spacer />
    <Box>
      <DarkModeSwitch />
      <Menu>
        <MenuButton
          id="menu-button"
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color={bg}
          marginLeft="10px"
        />
        <MenuList color={textColor}>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
