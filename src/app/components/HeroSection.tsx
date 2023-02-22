"use client"
import React from 'react'
import { Button, Container, Flex, Heading, Text, Box, Center} from "@chakra-ui/react"
import { RevealWrapper } from  'next-reveal'
import Image from "next/image"
import Link from 'next/link'
import png from '../../../public/images/characterart.png'

export default function HeroSection() {
  return (
    
    <Center backgroundImage={"/images/whitebg4.jpg"} pt="100px">
    <Container  px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1600px",md:"auto" ,base:"auto"}}>
        <Flex direction={{base:"column", lg:"row"}}  gap={{base:"30px"}}>
            <Box pt="60px"  alignItems={{lg:"left", md:"left", base:"center"}} flexBasis='50%'>
            <RevealWrapper reset={true} origin='left' duration={1000} distance="50px" delay={200}>
                <Heading mb={"20px"}>Launch your Development Career with Web 3.0 and Metaverse</Heading>
                <Text mb={"20px"}>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
                <Link href={'/Courses'}><Button bg="#EB2323" color="white">Explore Courses</Button></Link>
                </RevealWrapper>
            </Box>
            <Center alignItems={{lg:"left", md:"center", base:"center"}} flexBasis='50%' pb="20px">
            <RevealWrapper reset={true} origin={"right"} duration={1000} distance="30px" delay={200}>
            <Image src={png} alt="GirldwithVrHeadSet" width={'439'} height={'543'} />
            </RevealWrapper>
            </Center>
        </Flex>
    </Container>
    </Center>
    
  )
}
