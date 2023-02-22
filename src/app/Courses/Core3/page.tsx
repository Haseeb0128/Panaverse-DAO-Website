"use client"
import { Heading, Text, Box, Center, Flex, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Home() {
  return (
    <>
      <Container px={{lg:"80px",md:"40px",base:"20px"}} maxW={{lg:"1250px", md:"auto"}}>
      <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>Detailed Course Syllabus</Heading>
      <Heading mt="20px" textAlign={"center"}>Quarter 3 (Core)</Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Earn While You Learn Projects:</Text>
      </RevealList>
      </Container>

      <Center mt="10px" mb="120px">
      <Flex gap={"20px"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>  
      <RevealWrapper reset={true} origin="left">
      <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} h={{base:"403px", md:"280px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px" mt="5px">
      <Text fontSize={"18px"} fontWeight="640">Build Full-Stack Next.js 13 Jamstack Templates</Text>
      <Text>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</Text>
      <HStack>
      
      <Link href='https://github.com/panaverse/panaverse-template-standard' target={"_blank"}>The Template Standard</Link>  
      </HStack> 
      </VStack>
      </Box>
      </RevealWrapper>
      <RevealWrapper reset={true} origin="left">
      <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} h={{base:"344px", md:"248px", lg:"280px"}} borderRadius={"12px"}>
      <VStack align={"start"} p="20px" mt="5px">
      <Text fontSize={"18px"} fontWeight="640">Build QraphQL APIs </Text>
      <Text>You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</Text>
      </VStack>
      </Box>
      </RevealWrapper>
      </Flex>
      </Center>
      
    </>
  )
}