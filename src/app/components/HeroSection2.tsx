"use client"
import React from 'react'
import {Box, Button, Container, Flex, Heading, Spacer, Text} from "@chakra-ui/react"
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection2() {
  return (
    <Container bg={"white"} px={{lg:"60px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}} minH={{base:"900px", md:"auto", lg:"auto"}} py={{base:"40px",md:"60px", lg:"40px"}}>
        <Flex direction={{lg:"row", md:"column", base:"column"}}>
        <Container bg={"white"}>
              <Image src={"/images/Web3Art.png"} alt="GirldwithVrHeadSet" height={500} width={500} />
            </Container>
            <Spacer />
            <Box bg={"white"}  h={{lg:"340px",md:"400px" ,base:"530px"}} w={{lg:"600px",md:"600px",base:"300px"}} mt={"50px"} alignItems={{lg:"left", md:"left", base:"center"}}>
                <Heading mb={"20px"}>What is Web 3.0 ?</Heading>
                <Text mb={"20px"}>Web 3.0 has the potential to change the internet as we know it forever. You're still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest" phase” of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen</Text>
                <Link href={'/Courses'}><Button bg="#EB2323" color="white">Read More</Button></Link>
            </Box>
        </Flex>
    </Container>
  )
}
