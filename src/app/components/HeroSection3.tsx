"use client"
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { RevealList } from 'next-reveal'

export default function HeroSection3() {
 return (
    <Container textAlign={"center"} mt={{lg:"70px", md:"50px", base:"50px"}} p="20px" maxW={{lg:"1500px",md:"auto" ,base:"auto"}} >
        <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
        <Heading fontSize={"45px"}  mb="17px">The Program in a Nutshell</Heading>
        <Heading mb="17px">Earn While You Learn</Heading>
        <Box px={{lg:"120px", base:"20px"}}>
        <Text>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        </Box>
        </RevealList>
    </Container>
  )
}
