"use client"
import {  Heading, Text, Center, Link, HStack, Icon, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"7px"}}>
      <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Network Programmability and Automation Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 5
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      NPA-361: Network Programmability and Automation
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.</Text>
      </RevealList>
     </Container>
     <Center mt="10px" mb="120px">
       <HStack>
       <RevealWrapper reset={true} origin="left"> 
       <Link href='https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1' target="_blank">Textbook Link</Link>
       </RevealWrapper>
       </HStack>
       </Center>
</>
    
  )
}