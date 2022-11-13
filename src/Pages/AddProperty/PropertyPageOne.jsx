import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";
import states from "../../utils/states.json";
import countries from "../../utils/countries.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm, tempFormFn } from "../../Redux/AppReducer/action";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
const PropertyPageOne = () => {
  const addPropertyForm = useSelector(
    (store) => store.appReducer.addPropertyForm
  );
  // console.log(addPropertyForm)
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("");
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleFormOne = (e) => {
    e.preventDefault();
    dispatch(addForm(details)).then((res) => {
      navigate("/addproperty-form-2", {
        state: { id: res.payload.id, form: details },
      });
    });
  };
  return (
    <>
      <Navbar />
      <Box position="relative" height={"85vh"}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          border="2px solid gray"
          padding="1rem"
          borderRadius="none"
        >
          <form onSubmit={handleFormOne}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select
                required
                onChange={(e) => {
                  setCountryCode(
                    countries.find(
                      (item) => item.country_name === e.target.value
                    )
                  );
                  handleInput(e);
                }}
                name="country"
              >
                {countries?.map((item, index) => (
                  <option
                    title={item.country_id}
                    key={index}
                    value={item.country_name}
                  >
                    {item.country_name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Select required name="state" onChange={(e) => handleInput(e)}>
                {states
                  ?.filter((item) => item.country_id == countryCode.country_id)
                  .map((item, index) => (
                    <option key={index} value={item.state_name}>
                      {item.state_name}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                required
                name="city"
                onChange={(e) => handleInput(e)}
                placeholder="Enter city name"
                type="text"
              />
            </FormControl>
            <Flex justify={"space-around"} m="1rem">
              <Button
                borderRadius={"none"}
                colorScheme="orange"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
             
              <Button
                borderRadius={"none"}
                type="submit"
                colorScheme="linkedin"
              >
                Next
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default PropertyPageOne;
