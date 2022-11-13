import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const PhoneOtp = () => {
    const [otp,setOtp]=useState("")
    useEffect(()=>{
      let time=setTimeout(()=>{
          setOtp(Math.random())
          alert(otp)
      },4000)
    },[])
  return (
    <Box mt="20px" >
        <Heading mb="40px" textAlign="center">Verify with phone OTP</Heading>
        <Box w="20%" m="auto" border="1px solid lightgray" h="200px" p="20px" borderRadius="10px">
            <Input placeholder='Enter OTP'/>
            <Button mt="20px" w="100%">Submit</Button>
        </Box>
    </Box>
  )
}

export default PhoneOtp