"use client"
import { Box, Center, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'


export default function Courses() {
    return (
        <>
        <Container mt="120px"  px={{base:"25px", lg:"70px"}} maxW={{base:"auto", lg:"1366"}}>
        <Center>
        <VStack>
        <Heading textAlign={"center"} mb="10px">Web 3.0</Heading>
        <Text textAlign={"center"} mb="20px">Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</Text>
        <Text textAlign={"center"}>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
        </VStack>
        </Center>
        </Container>

        <Container  mb="60px" maxW={{base:"auto", lg:"1366"}}>
        <Heading textAlign={"center"} mt="30px" mb={"25px"}>Program Structure</Heading>
        <Heading mt="10px" fontSize={"25px"} textAlign={{base:"center", lg:"left"}} px={{lg:"30px", base:"20px"}}>Core Courses (Common in all Specializations)</Heading>
        <Text mt="10px" textAlign={{base:"center", lg:"left"}} px={{lg:"30px", base:"20px"}}>Every participant of the program will start by completing the following three core courses:</Text>
        <Box>
        <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
          <Link href={'/Courses/Core1'}><Box bg="#50E09F" w={{lg:"320px", md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="30px">
            <Text textAlign={"center"} fontSize={"30px"} fontWeight="600">Quarter 1</Text>
            <Text textAlign={"center"} p="10px" fontWeight="600">CS-101: Object-Oriented Programming using TypeScript</Text>
          </Box></Link>
          <Link href={'/Courses/Core2'}><Box bg="#50E09F" w={{lg:"320px", md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="30px">
            <Text textAlign={"center"} fontSize={"30px"} fontWeight="600">Quarter 2</Text>
            <Text textAlign={"center"} p="10px" fontWeight="600">W2-201: Developing planet scale Web 2.0 Serverless Cloud Apps and API’s using Next JS 13 and CDK for Terraform</Text>
          </Box></Link>
          <Link href={'/Courses/Core3'}><Box bg="#50E09F" w={{lg:"320px", md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="30px">
            <Text textAlign={"center"} fontSize={"30px"} fontWeight="600">Quarter 3</Text>
            <Text textAlign={"center"} p="10px" fontWeight="600">$-101: Dollar Making Bootcamp-Full-Stack Template and API Product Development</Text>
          </Box></Link>
        </Flex>
      </Box>
      </Container>

      <Container  mb={"60px"} px={{base:"15px"}} maxW={{base:"auto", lg:"1366"}}>
      <Heading fontSize={"25px"} px={{lg:"70px", base:"20px"}} textAlign={{base:"center",md:"center",lg:"left"}}>Specialized Tracks</Heading>
      <Text px={{lg:"70px", base:"20px", md:"20px"}} mt="10px" mb="20px" textAlign={{base:"center", md:"center", lg:"left"}}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
      <Heading mt="10px" fontSize={"25px"} textAlign={"center"}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
      <Text mx={{base:"10px", lg:"70px"}} mt="10px" textAlign="center">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
      <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} gap="20px" align={"center"}>
            <Link href={'/Courses/WMQ4'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
                <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
                <Text textAlign={"center"} p="10px" fontWeight="600">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
              </Box>
            </Link>
            <Link href={'/Courses/WMQ5'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
                <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
                <Text textAlign={"center"} p="10px" fontWeight="600">MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Text>
              </Box>
            </Link>
          </Flex>
        </Box>
        </Container>

        <Container  mb={"60px"} maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading fontSize={"25px"} textAlign={"center"}>Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
        <Text textAlign={"center"} mt="10px">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
        <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
            <Link href={'/Courses/AIQ4'}>
            <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</Text>
            </Box></Link>
            <Link href={'/Courses/AIQ5'}>
            <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">AI-361: Deep Learning and MLOps</Text>
            </Box></Link>
          </Flex>
        </Box>
        </Container>

        <Container  mb="60px" maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading mt="10px" fontSize={"25px"} textAlign={"center"}>Cloud-Native Computing Specialization</Heading>
        <Text textAlign={"center"} mt="10px">The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
        <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
            <Link href={'/Courses/CNCQ4'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
            </Box></Link>
            <Link href={'/Courses/CNCQ5'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
            </Box></Link>
          </Flex>
        </Box>
        </Container>

        <Container mb="60px" maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading mt="10px" fontSize={"25px"} textAlign={"center"}>Ambient Computing and IOT Specialization</Heading>
        <Text textAlign={"center"} mt="10px">The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</Text>
        <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
            <Link href={'/Courses/ACQ4'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices</Text>
            </Box></Link>
            <Link href={'/Courses/ACQ5'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">AC-361: Embedded Programming using C and Rust</Text>
            </Box></Link>
          </Flex>
        </Box>
        </Container>
        
        <Container mb="60px" maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading mt="10px" fontSize={"25px"} textAlign={"center"}>Genomics and Bioinformatics Specialization</Heading>
        <Text textAlign={"center"} mt="10px">Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.</Text>
        <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
            <Link href={'/Courses/GBQ4'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">Bio-351: Python for Biologists</Text>
            </Box></Link>
           <Link href={'/Courses/GBQ5'}>
            <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">Bio-361: Bioinformatics with Python</Text>
            </Box></Link>
          </Flex>
        </Box>
        </Container>

        <Container mb="60px" maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading mt="10px" fontSize={"25px"} textAlign={"center"}>Network Programmability and Automation Specialization</Heading>
        <Text textAlign={"center"} mt="10px">More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
        <Box>
          <Flex justify={"space-evenly"} mt="25px" direction={{base:"column", md:"column", lg:"row"}} align="center" gap="20px">
            <Link href={'/Courses/NPAQ4'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 4</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">NPA-351: CCNA 200-301 Certification</Text>
            </Box></Link>
            <Link href={'/Courses/NPAQ5'}>
              <Box bg="#50E09F" w={{lg:"500px",md:"500px",base:"320px"}} h="195px" borderRadius={"12px"} pt="15px">
              <Text textAlign={"center"} mt="25px" fontSize={"30px"} fontWeight="600">Quarter 5</Text>
              <Text textAlign={"center"} p="10px" fontWeight="600">NPA-361: Network Programmability and Automation</Text>
            </Box></Link>
          </Flex>
        </Box>
        </Container>
        
        <Container maxW={{base:"auto", lg:"1366"}} px={{lg:"40px", base:"20px", md:"30px"}}>
        <Heading textAlign={"center"} mb="20px" mt="10px">The Outcome for Participants of the Program</Heading>
        <Text textAlign={"center"} mb="20px">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</Text>
        <VStack>
          <Link href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms" target="_blank">Top 5 'Metaverse' jobs that will rule the future of tech industry</Link>
          <Link href={'https://web3.career/web3-salaries/blockchain-developer'} target="_blank">Blockchain Developer Salary - Jun 2022</Link>
          <Link href={'https://thedefiant.io/web3-soaring-salaries/'} target="_blank">Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link>
          <Link href={'https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'} target="_blank">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</Link>
          <Link href={'https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'} target="_blank">How To Become Metaverse Developer: Scope, Skills, and Salary</Link>
        </VStack>
        </Container>
        </>
    )
  }
  