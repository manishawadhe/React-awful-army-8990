import React, { useEffect, useState } from 'react'
import * as types from '../../Redux/AuthReducer/actionType'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, InputGroup,Modal, ModalBody,ModalContent, ModalFooter, ModalOverlay,Text, useDisclosure, useToast} from "@chakra-ui/react"
import { type } from '@testing-library/user-event/dist/type';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({isOpen:true});
  const [email, setEmail] = useState("");
  const [storedData,setStoredData]=useState([])
  const [password, setPassword] = useState("");
  const emailError=email==="";
  const passwordError=password==="";

  const toast=useToast()

  const navigation=useNavigate()
  const dispatch=useDispatch()
  // const navigate=useNavigate()
  const location=useLocation()
  const commingFrom=location.state?.from?.pathname || '/'


  const loginHandle=()=>{


    // console.log("beore",storedData)
    let fname="";
    let sEmail=storedData.map((e)=>{
      fname=e.firstName
      return e.email
    })
    let sPassord=storedData.map((e)=>{
      return e.password
    })
    if(sEmail.includes(email) && sPassord.includes(password)){
      console.log("firstName",fname)
      dispatch({type:types.GET_LOGIN_SUCCESS,payload:true})
      dispatch({type:types.GET_FISTNAME_SUCCESS,payload:fname})
      navigation(commingFrom,{replace:true})
      toast({
        title: 'Successful.',
        position:'top',
        description: "Your are loged in successfuly",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    else{
      dispatch({type:types.GET_LOGIN_FAILURE,payload:false})
      toast({
        title: 'Wrong email or password',
        position:'top',
        description: `You enterd wrong email or password try again`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })    }
     
  }

  const getData=async()=>{
    let res= await fetch(`https://api-0231.herokuapp.com/signupData`)
    let data = await res.json()
    setStoredData(data)
    
  }

  const navigateHandle=()=>{
    navigation("/")
  }
useEffect(()=>{
  getData()
},[])
  return (
    <Box>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Flex justifyContent="space-between" p="20px">
              <Heading fontSize="lg">Signup</Heading>
             <Link to="/signup">Sign up first </Link>
            </Flex>
              <hr style={{ width:"90%",margin:"auto"}}/>
            <ModalBody>
               
                <InputGroup>
                     <FormControl isInvalid={emailError} >
                      <Input mt="20px" type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                      {!emailError ? "" : (
                          <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>

                </InputGroup>
                <InputGroup>
                <FormControl isInvalid={passwordError} >
                      <Input mt="20px" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                      {!passwordError ? "" : (
                          <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                    </FormControl>                
                </InputGroup>
               
            </ModalBody>
              <hr style={{width:"90%",margin:"auto"}}/>

            <ModalFooter>
              <Button variant="outline" mr={3} onClick={navigateHandle}>
                CANCEL
              </Button>
              <Button disabled={!email || !password} colorScheme='blue' mr={3} onClick={loginHandle}>
                Login
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default Login