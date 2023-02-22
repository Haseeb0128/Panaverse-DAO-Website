"use client"
import {  Heading, Text, Box, Center, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
        <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"} >
      Cloud-Native Computing Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 4
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      CN-351: Certified Kubernetes Application Developer (CKAD)
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.</Text>
      <Text mt="10px"  textAlign={"center"}>These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.</Text>
      <Text mt="10px"  textAlign={"center"}>Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </RevealList>
      </Container>

      <Center mt="10px" mb="120px">
        <VStack gap="10px">
          <RevealWrapper reset={true} origin="left">
        <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition</Text>
            <HStack>
              
              <Link href='https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3' target={"_blank"}>Book</Link>
            </HStack>
          </VStack>
        </Box>
        </RevealWrapper>
        <RevealWrapper origin="left" reset={true}>
        <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Cloud Development Kit for Kubernetes</Text>
            <HStack>
              
              <Link href='https://cdk8s.io/' target={"_blank"}>Link</Link>
            </HStack>
          </VStack>
        </Box>
        </RevealWrapper>
        </VStack>
    </Center>
    </>
    
  )
}