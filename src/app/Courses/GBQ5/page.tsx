"use client"
import {  Heading, Text, Center, Link, HStack, Icon, Container } from '@chakra-ui/react'
import { AiOutlineAmazon } from 'react-icons/Ai'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Genomics and Bioinformatics Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 5
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      Bio-361: Bioinformatics with Python
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.</Text>
      </Container>
     <Center mt="10px">
      <HStack>
        <Icon as={AiOutlineAmazon} />
       <Link href='https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1' target="_blank">Textbook Link</Link>
       </HStack>
       </Center>
</>
    
  )
}