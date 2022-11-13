import React from "react";
import Carousal_HomePage from "../../Components/Carousal_HomePage";
import Navbar from "../../Components/Navbar";
import Searchbar_HomePage from "../../Components/Searchbar_HomePage";
// Import css files
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodySection_HomePage from "../../Components/BodySection_HomePage";
import { Text } from "@chakra-ui/react";
import FooterTabSection_HomePage from "../../Components/FooterTabSection_HomePage";
import Carousal_Vacation_Homepage from "../../Components/Carousal_Vacation_Homepage";

const HomePage = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1100px",
    "2xl": "1536px",
  };

  return (
    <div>
      <Navbar />
      <Searchbar_HomePage />
      <Text
        ml={{ base: "0rem", lg: "4.8rem" }}
        // ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
        textAlign={{ base: "center", lg: "" }}
      >
        Top Destinations
      </Text>
      <Carousal_HomePage />
      <BodySection_HomePage />
      <Text
        ml={{ base: "0rem", lg: "4.8rem" }}
        // ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="300"
        mt="2rem"
        mb="2rem"
        textAlign={{ base: "center", lg: "" }}
      >
        Vacation Ideas
      </Text>
      <Carousal_Vacation_Homepage />
      <Text
        ml="4.8rem"
        fontSize="14px"
        fontWeight="300"
        // mt="1rem"
        mb="4rem"
        color="blue"
      >
        SHOW ALL IDEAS
      </Text>

      <Text
        // ml="4.8rem"
        fontSize="24px"
        color="black"
        fontWeight="200"
        mt="1rem"
        mb="2rem"
        ml={{ base: "0rem", lg: "4.8rem" }}
        textAlign={{ base: "center", lg: "" }}
      >
        Holiday Homes Across The Globe
      </Text>
      <FooterTabSection_HomePage />
    </div>
  );
};

export default HomePage;
