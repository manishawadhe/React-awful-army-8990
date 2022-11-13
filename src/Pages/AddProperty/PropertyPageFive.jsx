import { Box, Input, Image, useToast, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { deleteForm } from "../../Redux/AppReducer/action";

const PropertyPageFive = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const [outerImages, setOuterImages] = useState([]);
  const [innerImages, setInnerImages] = useState([]);
  const toast = useToast();
  const handleOuterImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(filesArray);
      setOuterImages((prev) => prev.concat(filesArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const handleInnerImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setInnerImages(filesArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const addPictures = () => {
    const payload = {
      outer: outerImages,
      inner: innerImages,
    };
    if (innerImages.length < 3 && outerImages < 3) {
      toast({
        title: "Upload atleast 3 images",
        status: "info",
        duration: "500",
        isClosable: true,
      });
      return;
    } else {
      console.log(innerImages.length, outerImages.length);
      axios
        .patch(`https://api-0231.herokuapp.com/form/${location.state.id}`, {
          images: payload,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Images uploaded",
              description: "Your property is added to database",
              status: "success",
              duration: "500",
              isClosable: true,
            });
          }
        })
    }
  };
  const deleteProduct = ()=>{
    dispatch(deleteForm(location.state.id)).then((res)=>{
      if (res.type="DELETE_FORM_SUCCESS") {
        toast({
          title: "Item deleted",
          description: "Removed item from server",
          status: "info",
          duration: "1000",
          isClosable: true,
        });
        navigate("/");
      }
    })
  }
  return (
    <>
      <Navbar />
      <Box
        width="80%"
        boxShadow="md"
        margin="2rem auto"
        padding="2rem"
        //   height="50vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box>
          <label htmlFor="file">External/Common Area/Amenities Photos</label>
          <Input multiple type="file" onChange={handleOuterImageChange} />
          <Flex flexWrap={"wrap"}>
            {outerImages.length > 0 &&
              outerImages.map((img, i) => (
                <Image
                  display="inline"
                  margin="1rem"
                  width="220px"
                  height="200px"
                  key={i}
                  src={img}
                  alt="..."
                />
              ))}
          </Flex>
        </Box>
        <Box>
          <label htmlFor="file">Internal Photos</label>
          <Input multiple type="file" onChange={handleInnerImageChange} />
          <Flex flexWrap="wrap">
            {innerImages.length > 0 &&
              innerImages.map((img, i) => (
                <Image
                  display="inline"
                  margin="1rem"
                  width="220px"
                  height="200px"
                  key={i}
                  src={img}
                  alt="..."
                />
              ))}
          </Flex>
        </Box>
        <Button onClick={addPictures} variant="outline" colorScheme="whatsapp">
          Add
        </Button>
        <Button
            borderRadius="none"
            colorScheme="red"
            fontSize="10px"
            margin="5px auto"
            onClick={deleteProduct}
          >
            Remove item and go back
          </Button>
      </Box>
    </>
  );
};

export default PropertyPageFive;
