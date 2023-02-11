"use client"
import {  Heading, Text, Box, Center, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { AiOutlineAmazon } from 'react-icons/Ai'
import { BsGlobe2 } from 'react-icons/Bs'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"} >
        Artificial Intelligence (AI) and Deep Learning Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 5
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"} >
      AI-361: Deep Learning and MLOps
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </Container>

      <Center mt="15px">
        <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Deep Learning with Tensorflow</Text>
            <HStack>
              <Icon as={AiOutlineAmazon} />
              <Link href='https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2' target={"_blank"}>Deep Learning with Python, Second Edition 2nd Edition</Link>
            </HStack>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Machine Learning Engineering for Production (MLOps) using Terraform for CDK</Text>
            <HStack>
              <Icon as={BsGlobe2} />
              <Link href='https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351' target={"_blank"}>A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)</Link>
            </HStack>
            <HStack>
              <Icon as={BsGlobe2} />
              <Link href='https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce' target={"_blank"}>MLOps leveraging AWS SageMaker and Terraform</Link>
            </HStack>
          </VStack>
        </Box>
        </VStack>
    </Center>
    </>
    
  )
}