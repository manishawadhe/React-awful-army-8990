import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
const Error = () => {
  const navigate = useNavigate();
  return (
    <Box position={"relative"} height="100vh" width="100vw">
      <Navbar />
      <Box
        width="80%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        textAlign={"center"}
      >
        <Image
          width="404px"
          src="https://imgs.search.brave.com/gCN54lfKaaEXfPoS46-ZF1D3x1zZQ25R-jIvw7m2hcQ/rs:fit:500:335:1/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU1LzU5LzQ3/LzUwMF9GXzE1NTU5/NDcyOV9ReGFrVDRV/cHdNN2hMNGx2T1dq/WG5RVmV2eHpoaE9r/eS5qcGc"
          alt="ErrorShit"
        />
        <Heading fontWeight={"base"} size="md" color="gray">
          Sorry for inconvenience, the page you are looking for no longer exist
        </Heading>
        <Box>
          <Button
            m="1rem"
            variant={"solid"}
            colorScheme="linkedin"
            onClick={() => navigate("/")}
            borderRadius="none"
          >
            Go to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Error;
