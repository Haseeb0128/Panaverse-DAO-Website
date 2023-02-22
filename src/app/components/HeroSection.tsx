"use client"
import React from 'react'
import { Button, Container, Flex, Heading, Text} from "@chakra-ui/react"
import { RevealWrapper } from  'next-reveal'
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <Container backgroundImage={"/images/whitebg4.jpg"} mt="80px" px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}}>
        <Flex direction={{base:"column", lg:"row"}}  gap={{base:"0px"}}>
            <Container h={{lg:"420px",md:"400px" ,base:"420px"}} maxW={{lg:"590px",md:"500px",base:"300px"}} pt="60px"  mt={{lg:"50px", base:"20px"}}  alignItems={{lg:"left", md:"left", base:"center"}} flexBasis="50%">
            <RevealWrapper reset={true} origin='left' duration={1000} distance="50px" delay={200}>
                <Heading mb={"20px"}>Launch your Development Career with Web 3.0 and Metaverse</Heading>
                <Text mb={"20px"}>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
                <Link href={'/Courses'}><Button bg="#EB2323" color="white">Explore Courses</Button></Link>
                </RevealWrapper>
            </Container>
            <Container  mt={"22px"} alignItems={{lg:"left", md:"center", base:"center"}} flexBasis="50%" pb="20px">
            <RevealWrapper reset={true} origin={"right"} duration={1000} distance="50px" delay={200}>
            <Image src={"/images/characterart.png"} alt="GirldwithVrHeadSet" height={534} width={440} />
            </RevealWrapper>
            </Container>
        </Flex>
    </Container>
  )
}
