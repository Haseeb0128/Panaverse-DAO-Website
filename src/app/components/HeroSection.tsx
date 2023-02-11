"use client"
import React from 'react'
import {Box, Button, Container, Flex, Heading, Spacer, Text} from "@chakra-ui/react"
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <Container bg={"#EDEEF3"} mt="80px" px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}}>
        <Flex direction={{base:"column", lg:"row"}}  gap={{base:"0px"}}>
            <Box h={{lg:"420px",md:"400px" ,base:"420px"}} w={{lg:"600px",md:"600px",base:"300px"}} pt="60px"  mt={{lg:"50px", base:"20px"}}  alignItems={{lg:"left", md:"left", base:"center"}}>
                <Heading mb={"20px"}>Launch your Development Career with Web 3.0 and Metaverse</Heading>
                <Text mb={"20px"}>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
                <Link href={'/Courses'}><Button bg="#EB2323" color="white">Explore Courses</Button></Link>
            </Box>
            <Spacer />
            <Container  mt={"22px"} alignItems={{lg:"left", md:"center", base:"center"}}>
              <Image src={"/images/characterart.png"} alt="GirldwithVrHeadSet" height={440} width={440} />
            </Container>
        </Flex>
    </Container>
  )
}
