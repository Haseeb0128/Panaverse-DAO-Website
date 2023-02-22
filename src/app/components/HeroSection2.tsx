"use client"
import React from 'react'
import { Button, Container, Flex, Heading, Text, Box, Center } from "@chakra-ui/react"
import { RevealWrapper, RevealList } from 'next-reveal'
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection2() {
  return (
    <Box bg="white">
    <Container  px={{ lg: "60px", md: "50px", base: "40px" }} maxW={{ lg: "1600px", md: "auto", base: "auto" }} minH={{ base: "900px", md: "auto", lg: "auto" }} py={{ base: "50px", md: "70px", lg: "80px" }}>
      <Flex direction={{ lg: "row", md: "column", base: "column" }} gap={{base:"30px"}}>
        <Center flexBasis='50%'>
          <RevealWrapper reset={true} origin='left' duration={1000} distance="50px" delay={200}>
            <Image src={"/images/Web3Art.png"} alt="GirldwithVrHeadSet" height={500} width={500} />
          </RevealWrapper>
        </Center>
        <Box flexBasis='50%'  alignItems={{ lg: "left", md: "left", base: "center" }} py={{lg:"60px",base:"0px"}}>
          <RevealWrapper reset={true} origin='right' duration={1000} distance="30px" delay={200}>
            <Heading mb={"20px"}>What is Web 3.0 ?</Heading>
            <Text mb={"20px"}>Web 3.0 has the potential to change the internet as we know it forever. You're still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest" phase” of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen</Text>
            <Link href={'/Courses'}><Button bg="#EB2323" color="white">Read More</Button></Link>
          </RevealWrapper>
        </Box>
      </Flex>
      <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
          <Heading fontSize={"45px"} mb="17px" mt="100px" textAlign={"center"}>The Program in a Nutshell</Heading>
          <Heading mb="17px" textAlign={"center"}>Earn While You Learn</Heading>
          <Box px={{ lg: "120px", base: "0px" }} mb="120px">
            <Text textAlign={"center"}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
          </Box>
        </RevealList>
        </Container>
        </Box>
    
  )
}
