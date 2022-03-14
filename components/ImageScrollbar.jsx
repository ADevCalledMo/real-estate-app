import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const leftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        curser="pointer"
      />
    </Flex>
  );
};

const rightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowCircleRight}
        onClick={scrollNext}
        fontSize="2xl"
        curser="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={leftArrow}
      RightArrow={rightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box width="910px" itemId={item.id} overflow="hidden" p="1">
          <Image placeholder="blur" blurDataURL={item.url} src={item.url} />
        </Box>
      ))}
    </ScrollMenu>
  );
};
