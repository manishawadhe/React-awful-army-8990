import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const CarousalComponent = ({ allProducts }) => {
  //   console.log(allProducts)

  //   const addItem = () => {
  //     const nextItem = Math.max(1, items.length + 1);
  //     setItems([...items, nextItem]);
  //   };
  //   const removeItem = () => {
  //     const endRange = Math.max(0, items.length - 1);
  //     setItems(items.slice(0, endRange));
  //   };
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {allProducts.length > 0 &&
          allProducts?.map((item, index) => (
            <CarousalCard key={index} item={item} />
          ))}
      </Carousel>
    </>
  );
};

const CarousalCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Box
      width="300px"
      height="400px"
      borderRadius="5px"
      _hover={{ boxShadow: "2xl" }}
      onClick={() =>
        navigate({ pathname: `/products/${item.id}`, state: item })
      }
    >
      <Box width="inherit" height="60%">
        <Image
          src={
            item.images_medium[0] ||
            item.images_small[0] ||
            item.images_medium[0]
          }
          alt=""
          width="100%"
          height="100%"
          borderRadius="5px 5px 0px 0px"
        />
      </Box>
      <Flex direction="column" padding="5px 1rem">
        <Text width="100%" fontWeight="bold" fontSize="15px">
          {item.title}
        </Text>
        <Flex alignItems="center" margin="5px 10px">
          <GoLocation />
          {`__`}
          {`${item.city}/${item.state}/${item.country}`}
        </Flex>
        <Box>
          Room {`${item.television ? "| TV" : ""}`} {`${item.ac ? "| AC" : ""}`}{" "}
          {`${item.pets ? "| PETS ALLOWED" : "| PETS NOT ALLOWED"}`}
        </Box>
      </Flex>
    </Box>
  );
};
export default CarousalComponent;
