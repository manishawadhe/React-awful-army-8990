import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const PropertyPageThree = () => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const [brandName, setBrandName] = useState("");
  const handleForm = () => {
    if (brandName) {
      axios
        .patch(`https://api-0231.herokuapp.com/form/${location.state.id}`, {
          brandname: brandName,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate("/addproperty-form-4", {
              state: location.state,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/addproperty-form-4", { state: location.state });
    }
  };
  return (
    <>
      <Navbar />
      <Box position="relative" height="85vh" weight="100vh">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          height="60%"
          width="80%"
          boxShadow="2xl"
          padding="1rem"
          borderRadius="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="space-between"
          flexDirection="column"
        >
          <Heading m="1rem">Does it have a brand name?</Heading>
          <hr />
          <Text color="gray">
            <b>
              Your brand name. This is optional. You click next if you dont have
              one.
            </b>
          </Text>
          <Input
            type="text"
            autoComplete="false"
            placeholder="eg. Anantara Homestay"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <hr />
          <Flex justify={"space-between"}>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              borderRadius="none"
              variant="solid"
              colorScheme="blue"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={handleForm}
              borderRadius="none"
              variant="solid"
              colorScheme="blue"
            >
              NEXT
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default PropertyPageThree;
