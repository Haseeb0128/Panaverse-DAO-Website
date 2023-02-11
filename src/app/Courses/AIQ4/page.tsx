"use client"
import {  Heading, Text, Box, Center, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { AiOutlineAmazon } from 'react-icons/Ai'
import { BsGlobe2 } from 'react-icons/Bs'
import { SiCoursera, SiOpenai } from 'react-icons/Si'

export default function Home() {
  return (
    
      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
        Artificial Intelligence (AI) and Deep Learning Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 4
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.</Text>
      <Text mt="10px"  textAlign={"center"}>We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.</Text>
      <Text mt="10px"  textAlign={"center"}>We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </Container>
      
      <Center mt="15px">
        <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Introduction to Machine Learning, Data Science, and AI</Text>
            <HStack>
              <Icon as={SiCoursera} />
              <Link href='https://www.coursera.org/learn/ai-for-everyone' target={"_blank"}>AI for Everyone</Link>
            </HStack>
            <Text>AI for Everyone Quiz in Week 3</Text>
            <Text>Total Questions: 60, Total Time: 75 minutes</Text>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13</Text>
            <HStack>
              <Icon as={SiOpenai} />
              <Link href='https://openai.com/api/' target={"_blank"}>Open AI API</Link>
            </HStack>
            <HStack>
              <Icon as={BsGlobe2} />
              <Link href='https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45' target={"_blank"}>GPT-4 Is Coming Soon. Here’s What We Know About It</Link>
            </HStack>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Python Crash Course  for TypeScript Developers</Text>
            <HStack>
              <Icon as={AiOutlineAmazon} />
              <Link href='https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5' target="_blank">Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition</Link>
            </HStack>
          </VStack>
        </Box>
        </VStack>
    </Center>
    </>
    
  )
}