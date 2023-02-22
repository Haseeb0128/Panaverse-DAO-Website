"use client"
import { Flex, Heading, Text, Container, Box, Center } from '@chakra-ui/react'
import Image from 'next/image'
import { RevealList, RevealWrapper } from 'next-reveal'



export default function Leaders() {
    return (
      <>
        <RevealWrapper reset={true}>
        <Heading textAlign={"center"} mt="120px" mb="40px" px={{base:"8px"}}>Leaders Leading Panaverse</Heading>
        </RevealWrapper>
        <Center px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}} mb="100px" mt="60px">
        <Flex direction={{base:"column-reverse", lg:"row"}}  gap={{base:"30px",md:"30px", lg:"50px"}}>
            <Box  h={{lg:"auto",md:"auto" ,base:"auto"}} maxW={{lg:"590px",md:"500px",base:"300px"}}  alignItems={{lg:"left", md:"left", base:"center"}} mt={{lg:"0px",md:"0px", base:"20px"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin='left' duration={1000} distance="50px" delay={200}>
                <Heading mb={"20px"}>Zia-U-Khan</Heading>
                <Text mb={"20px"}>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</Text>
                <Text>Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</Text>
                </RevealList>
            </Box>
            <Box  alignItems={{lg:"left", md:"center", base:"center"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin={"right"} duration={1000} distance="30px" delay={200}>
            <Image src={"/images/ziakhan.jpg"} alt="GirldwithVrHeadSet" height={534} width={440} />
            </RevealList>
            </Box>
        </Flex>
    </Center>
    <Center px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}} mb="100px">
        <Flex direction={{base:"column", lg:"row"}}  gap={{base:"30px",md:"30px", lg:"50px"}}>
        <Box alignItems={{lg:"left", md:"center", base:"center"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin={"left"} duration={1000} distance="50px" delay={200}>
            <Image src={"/images/daniyal.jpg"} alt="GirldwithVrHeadSet" height={534} width={440} />
            </RevealList>
            </Box>
            <Box h={{lg:"auto",md:"auto" ,base:"auto"}} maxW={{lg:"590px",md:"500px",base:"300px"}} mt={{lg:"0px",md:"0px", base:"20px"}}  alignItems={{lg:"left", md:"left", base:"center"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin='right' duration={1000} distance="30px" delay={200}>
                <Heading mb={"20px"}>Daniyal Nagori</Heading>
                <Text mb={"20px"}>I am a Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development and deployment of tools, apps and microservices.</Text>
                <Text mb={"20px"}>I have been fortunate to be able to architect solutions in as wide an array as Cloud Native, Voice Computing/Chatbot development, Web, Mobile, AI, and Blockchain.
                I have architect level expertise with special emphasis on Web, Mobile, and Cloud Computing implementation. I am an expert at all stages of SDLC and have managed numerous projects with full ownership and responsibility.</Text>
                </RevealList>
            </Box>
        </Flex>
    </Center>
    <Center px={{lg:"50px",md:"50px" ,base:"40px"}} maxW={{lg:"1500px",md:"auto" ,base:"auto"}} mb="120px">
        <Flex direction={{base:"column-reverse", lg:"row"}}  gap={{base:"30px",md:"30px", lg:"50px"}}>
            <Box h={{lg:"auto",md:"auto" ,base:"auto"}} maxW={{lg:"590px",md:"500px",base:"300px"}} mt={{lg:"0px",md:"0px", base:"20px"}}  alignItems={{lg:"left", md:"left", base:"center"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin='left' duration={1000} distance="50px" delay={200}>
                <Heading mb={"20px"}>Hira Khan</Heading>
                <Text mb={"20px"}>I am the Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing. The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. The mission is to train our workforce in the latest technologies and abuild a technology driven economy in both the domestic market as well as exports. I am a patron of the PIAIC program.</Text>
                <Text>I co-founded Panacloud Pvt. Ltd. in 2012, which has been working in the technology education and services industry for the past 7 years. Prior to this I had been leading the Operation Badar Welfare Trust. Over the past 20 years, my team has collectively trained over 110,000 students, 30,000+ of which I am personally responsible for.</Text>
                </RevealList>
            </Box>
            <Box alignItems={{lg:"left", md:"center", base:"center"}} flexBasis="50%">
            <RevealList interval={60} reset={true} origin={"right"} duration={1000} distance="30px" delay={200}>
            <Image src={"/images/hira.jpeg"} alt="GirldwithVrHeadSet" height={534} width={440} />
            </RevealList>
            </Box>
        </Flex>
    </Center>
      </>
    )
  }