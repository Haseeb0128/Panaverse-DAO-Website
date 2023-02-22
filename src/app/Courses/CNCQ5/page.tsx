"use client"
import {  Heading, Text, Box, Center, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Cloud-Native Computing Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 5
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      CN-361: Developing Multi-Cloud Apps using CDK for Terraform
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </RevealList>
      </Container>

      <Center mt="10px" mb="120px">
        <VStack gap="10px">
        <RevealWrapper reset={true} origin="left">
        <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">CDK for Terraform</Text>
            <HStack>
              
              <Link href='https://developer.hashicorp.com/terraform/cdktf' target={"_blank"}>Link</Link>
            </HStack>
          </VStack>
        </Box>
        </RevealWrapper>
        </VStack>
    </Center>
    </>
    
  )
}