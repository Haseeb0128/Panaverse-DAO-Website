"use client"
import { Heading, Text, Box, Center, Flex, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { BsGithub, BsGlobe2, BsCameraVideo, BsBook } from 'react-icons/Bs'
import { AiOutlineAmazon } from 'react-icons/Ai'
import {SiBlender} from 'react-icons/Si'

export default function Home() {
  return (

      <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>Web 3 and Metaverse Specialization</Heading>
      <Heading mt="20px" textAlign={"center"}>Quarter 5</Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text><Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px"  textAlign={"center"}>The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </Container>
      
      <Center mt="15px">
      <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
        <VStack align={"start"} p="20px">
          <Text fontSize={"18px"} fontWeight="640">Open Metaverse Web Development</Text>
          <HStack>
            <Icon as={BsGithub} />
            <Link href='https://github.com/panaverse/metaverse-web' target={"_blank"}>Open Metaverse Learning Repo</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    <Center mt="20px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px">
            <Text fontSize={"18px"} fontWeight="640">Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</Text>
            <Text>Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.</Text>
            <HStack>
              <Icon as={SiBlender} />
              <Link href='https://www.blender.org/download/' target={"_blank"}>Blender 3.3+ Download</Link>
            </HStack>
            <HStack>
              <Icon as={BsCameraVideo} />
              <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' target={"_blank"}>Blender 3.0 Beginner Tutorial</Link>
            </HStack>
            <HStack>
              <Icon as={BsBook} />
              <Link href='https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit' target={"_blank"}>Blender 3.0 Hotkey</Link>
            </HStack>
            <HStack>
              <Icon as={BsGlobe2} />
              <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target={"_blank"}>Blender Projects Textbook: Blender by Example 2nd Edition</Link>
            </HStack>
            <HStack>
              <Icon as={AiOutlineAmazon} />
              <Link href='https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5' target={"_blank"}>Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain</Link>
            </HStack>
            <HStack>
              <Icon as={BsCameraVideo} />
              <Link href='https://www.youtube.com/watch?v=H7T0SzdFHwg' target={"_blank"}>Best Hardware Performance for Blender Rendering</Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
      <Center mt="20px">
        <Flex gap={"20px"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 1:</Text>
              <HStack>
                <Icon as={BsCameraVideo} />
                <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' target={"_blank"}>Build a 3D Donut using Blender 3 as shown in these video tutorials</Link>
              </HStack>
            </VStack>
          </Box>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 2:</Text>
              <HStack>
                <Icon as={BsGlobe2} />
                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target={"_blank"}>Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition</Link>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Center>
      <Center mt="20px">
        <Flex gap={"20px"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 3:</Text>
              <HStack>
                <Icon as={BsGlobe2} />
                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target={"_blank"}>Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition</Link>
              </HStack>
            </VStack>
          </Box>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 4:</Text>
              <HStack>
                <Icon as={BsGlobe2} />
                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target={"_blank"}>Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition</Link>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Center>
      <Center mt="20px">
        <Flex gap={"20px"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center",lg:"initial"}}>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 5:</Text>
              <HStack>
                <Icon as={BsGlobe2} />
                <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target={"_blank"}>Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition</Link>
              </HStack>
            </VStack>
          </Box>
          <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Assignment 6:</Text>
              <HStack>
                <Icon as={BsCameraVideo} />
                <Link href='https://www.youtube.com/watch?v=bpvh-9H8S1g' target={"_blank"}>Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials</Link>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Center>
      </>
    
  )
}