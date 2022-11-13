import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import statesData from "../../utils/states.json";
import types from "../../utils/types.json";
import CarousalComponent from "../../Components/Carousal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../../Redux/AppReducer/action";
const ProductListByCity = () => {
  const { sortBy } = useParams();
  console.log(types);

  let res = types.find((item) => item.type === sortBy);
  console.log(res);

  const dispatch = useDispatch();
  const [sorted, setSorted] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || []
  );
  const products = useSelector((store) => store.appReducer.allProducts);

  const handleTypeSort = (type) => {
    console.log(type)
  };
  // ===============
  useEffect(() => {
    dispatch(getCities()).then((res) => {
      let result = res.payload.filter(
        (item) => item.state === sortBy.toLowerCase()
      );
      setSorted(result);
      // setSorted(
      //   res.payload.filter((item) => item.state === sortBy.toLowerCase())
      // );
    });
  }, []);
  return (
    <Box>
      {/* navbar  */}
      <Box>
        <Navbar />
      </Box>
      {/* search  */}
      <Box textAlign="center" border="1px solid" mt="5px">
        <Heading>Search bar component</Heading>
      </Box>
      <Box margin="3rem" padding="1rem" boxShadow="md">
        {/* tabs  */}
        <Box>
          <Tabs>
            <TabList>
              <Tab>TYPES</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="100px"
                  fontSize="12px"
                  fontWeight="light"
                  textAlign="center"
                  spacing=".5rem"
                  width="70%"
                >
                  {types?.map((type) => (
                    <Button
                      variant="ghost"
                      fontWeight="light"
                      onClick={() => handleTypeSort(type.type)}
                      key={type.id}
                    >
                      {type.type}
                    </Button>
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        {/* Breadcrumb  */}
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Country</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>City</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Heading as="h3">City Holiday Homes</Heading>
        {/* carousel */}
        <Box mt="1rem">
          <CarousalComponent allProducts={sorted} />
        </Box>
        {/* explore on map  */}
        <Box height={"100vh"} width={"100vw"}></Box>
      </Box>
    </Box>
  );
};

export default ProductListByCity;
