"use client"
import {  Heading, Text, Center, Link, HStack, Icon, Container } from '@chakra-ui/react'
import { AiOutlineAmazon } from 'react-icons/Ai'

export default function Home() {
  return (
    
      <>

      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"7px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Network Programmability and Automation Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 4
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      NPA-351: CCNA 200-301 Certification
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.</Text>
     </Container>
     <Center mt="10px">
      <HStack>
        <Icon as={AiOutlineAmazon} />
     <Link href='https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1' target="_blank">Textbook Link</Link>
     </HStack>
     </Center>
</>
    
  )
}