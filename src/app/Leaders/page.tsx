"use client"
import { Flex, Heading, Box, Image, VStack, Text, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'



export default function Leaders() {
    return (
      <>
        <Heading textAlign={"center"} mt="120px" mb="40px" px={{base:"8px"}}>Leaders Leading Panaverse</Heading>
        <Flex justify={"space-evenly"} direction={{lg:"row", md:"column", base:"column"}} align={{base:"center"}} gap={{base:"20px"}}>
          <Box bg="#50E09F" w="334px" h="430px" borderRadius={"12px"}>
          <VStack gap="2px">  
          <Image src={"/images/ziakhan.png"} alt="Ziakhan" mt={"10px"} />
          <Text fontSize={"25px"} fontWeight="650">Zia-U-Khan</Text>
          <Text fontSize={"20px"} fontWeight="600">Lead Faculty Member</Text>
          <Text pl="15px" pr="15px" textAlign={"center"}>Web 3, DeFi, Cloud and Metaverse Architect Tokenomist and Metanomist CEO Panacloud Volunteer COO Presidential Initiative for AI and Computing</Text>
          </VStack>
          <Box mt="35px" ml="70px">
          <HStack gap={"17px"}>
          <Link href={'https://www.facebook.com/ziakhan'} target="_blank"><Image src='/images/fb.svg' /></Link>
                <Link href={'https://twitter.com/ziakhan'} target="_blank"><Image src='/images/tw.svg' /></Link>
                <Link href={'https://www.linkedin.com/in/ziaukhan/?originalSubdomain=pk'} target="_blank"><Image src='/images/lin.svg' /></Link>
          </HStack>
          </Box>
          </Box>
          <Box bg="#50E09F" w="334px" h="430px" borderRadius={"12px"}>
          <VStack gap="2px">  
          <Image src={"/images/daniyal.png"} alt="daniyal" mt={"10px"} />
          <Text fontSize={"25px"} fontWeight="650">Danial Nagori</Text>
          <Text fontSize={"20px"} fontWeight="600">Chief Technology Officer</Text>
          <Text pl="15px" pr="15px" textAlign={"center"}>Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development and deployment of tools, apps and microservices.</Text>
          <HStack gap={"17px"}>
          <Link href={'https://www.facebook.com/daniyalnagori1237'} target="_blank"><Image src='/images/fb.svg' /></Link>
                <Link href={'https://twitter.com/daniyalnagori1'} target="_blank"><Image src='/images/tw.svg' /></Link>
                <Link href={'https://www.linkedin.com/in/daniyalnagori/?originalSubdomain=pk'} target="_blank"><Image src='/images/lin.svg' /></Link>
          </HStack>
          </VStack>
          </Box>
          <Box bg="#50E09F" w="334px" h="430px" borderRadius={"12px"}>
          <VStack gap="2px">  
          <Image src={"/images/hira.png"} alt="hirakhan" mt={"10px"} />
          <Text fontSize={"25px"} fontWeight="650">Hira Khan</Text>
          <Text fontSize={"20px"} fontWeight="600">Director PIAIC</Text>
          <Text pl="15px" pr="15px" textAlign={"center"}>Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing.</Text>
          </VStack>
          <Box mt="60px" ml="70px">
          <HStack gap={"17px"}>
          <Link href={'https://www.facebook.com/ziakhan'} target="_blank"><Image src='/images/fb.svg' /></Link>
                <Link href={'https://twitter.com/ziakhan'} target="_blank"><Image src='/images/tw.svg' /></Link>
                <Link href={'https://www.linkedin.com/in/hira-khan-76523540/?originalSubdomain=pk'} target="_blank"><Image src='/images/lin.svg' /></Link>
          </HStack>
          </Box>
          </Box>
        </Flex>
      </>
    )
  }