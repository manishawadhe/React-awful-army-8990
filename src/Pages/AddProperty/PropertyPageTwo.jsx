import {
  Box,
  Checkbox,
  Heading,
  Text,
  VStack,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import { useSelector } from "react-redux";
const PropertyPageTwo = () => {
  const individual = [
    "Resort",
    "Homestay",
    "Farm",
    "Tented Campsite",
    "Bed and Breakfast",
    "Hotel",
    "Serviced Apartment",
  ];
  const intire = [
    "Room In Your House",
    "Studio",
    "Villa",
    "Apartment",
    "Cottage",
    "Caravan",
    "Houseboat",
    "Luxury Yacht",
    "Cabin",
    "Condo",
  ];
  const location = useLocation();
  console.log(location.state.form);
  const toast = useToast();
  const navigate = useNavigate();
  const type = useSelector((store) => store.appReducer);
  const [value, setValue] = useState("");
  const nextForm = () => {
    if (value) {
      axios
        .patch(`https://api-0231.herokuapp.com/form/${location.state.id}`, {
          type: value,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Type added",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            navigate("/addproperty-form-3", { state: location.state });
          }
        });
    }
  };
  return (
    <>
      <Navbar />
      <Box padding="1rem">
        <Heading margin="1rem auto" textAlign={"center"}>
          What type of property do you have?
        </Heading>
        <RadioGroup onChange={(value) => setValue(value)} value={value}>
          <VStack
            width="70%"
            textAlign="left"
            color="gray"
            border="1px solid lightgray"
            padding="1rem"
            margin=" 1rem auto"
          >
            <Text>
              Select one of these if you have rooms that you rent out
              individually
            </Text>
            <Flex direction="column" width="100%" padding="1rem">
              {individual?.map((item, index) => (
                <Radio
                  key={index}
                  margin=".5rem"
                  name="individual"
                  colorScheme="blue"
                  borderRadius="50%"
                  value={item}
                >
                  {item}
                </Radio>
              ))}
            </Flex>
          </VStack>
        </RadioGroup>
        <Heading textAlign="center" margin="1rem">
          OR
        </Heading>
        <RadioGroup onChange={(value) => setValue(value)} value={value}>
          <VStack
            width="70%"
            textAlign="left"
            color="gray"
            border="1px solid lightgray"
            padding="1rem"
            margin=" 1rem auto"
          >
            <Text>
              Select one of these if you rent out entire properties of the types
              below
            </Text>
            <Flex direction="column" width="100%" padding="1rem">
              {intire?.map((item, index) => (
                <Radio
                  key={index}
                  margin=".5rem"
                  name="intire"
                  value={item}
                  colorScheme="blue"
                  borderRadius="50%"
                >
                  {item}
                </Radio>
              ))}
            </Flex>
          </VStack>
        </RadioGroup>
        <Flex justify={"space-evenly"}>
          <Button
            colorScheme={"linkedin"}
            borderRadius="none"
            onClick={() => {
              navigate(-1, { state: { form: location.state.form } });
            }}
          >
            PREV
          </Button>
          <Button
            colorScheme={"linkedin"}
            borderRadius="none"
            onClick={nextForm}
          >
            {" "}
            NEXT
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default PropertyPageTwo;
