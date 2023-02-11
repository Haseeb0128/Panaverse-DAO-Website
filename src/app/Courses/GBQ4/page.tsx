"use client"
import {  Heading, Text, Center, Link, HStack, Icon, Container } from '@chakra-ui/react'


export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Genomics and Bioinformatics Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 4
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      Bio-351: Python for Biologists
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>This course will focus on learning the basics of the Python programming language through genomics examples.</Text>
      </Container>
      <Center mt="10px">
      <HStack>
       
      <Link href='https://www.pythonforbiologists.org/' target={"_blank"}>Textbook Link</Link>
      </HStack>
      </Center>
      
</>
    
  )
}