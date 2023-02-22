"use client"
import {  Heading, Text, Box, Center, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Home() {
  return (
    
      <>
      
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Ambient Computing and IOT Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 4
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>
      AC-351: Ambient Computing with Voice Assistants and Matter Devices
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.</Text>
      <Text mt="10px"  textAlign={"center"}>If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.</Text>
      <Text mt="10px"  textAlign={"center"}>Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.</Text>
      <Text mt="10px"  textAlign={"center"}>In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </RevealList>
      </Container>

      <Center mt="10px" mb="120px">
        <VStack gap="10px">
        <RevealWrapper origin="left" reset={true}>
        <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Alexa Skill Developement </Text>
            <HStack>
              <Link href='https://developer.amazon.com/en-US/alexa' target={"_blank"}>Link</Link>
            </HStack>
          </VStack>
        </Box>
        </RevealWrapper>
        <RevealWrapper origin="left" reset={true}>
        <Box bg="#CECCCC" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Alexa with Matter Protocol</Text>
            <HStack>
              
              <Link href='https://developer.amazon.com/en-US/alexa/matter' target={"_blank"}>Link 1</Link>
            </HStack>
            <HStack>
        
              <Link href='https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html' target={"_blank"}>Link 2</Link>
            </HStack>
          </VStack>
        </Box>
        </RevealWrapper>
        </VStack>
    </Center>
    </>
    
  )
}