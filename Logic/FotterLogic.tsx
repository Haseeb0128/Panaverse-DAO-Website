import { Box, Flex, HStack, Text, VStack, Icon, Center,Image } from '@chakra-ui/react'
import React from 'react'
// import Image from "next/image"
import Link from 'next/link'
import { BsGithub, BsYoutube, BsFacebook } from 'react-icons/Bs'
import { AiFillTwitterCircle } from 'react-icons/Ai'


export default function Footer() {
  return (
        <Box bg="#7B7A7A" h={{base:"930px",md:"660px" , lg:"300px"}} mt={"120px"}>
            <Flex direction={{base:"column", lg:"row", md:"column"}} justify="space-between">
                <Box pl="20px" pt="20px">
                    <VStack align={"start"} gap="10px">
                        <Box>
                            <Image src={"/images/panaverselogo.png"} alt="panaverse" width={180} height={100} />
                        </Box>
                        <Box>
                            <Text w={{base:"300px", md:"400px", lg:"500px"}}>
                            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                            </Text>
                        </Box>
                        <Box>
                            <HStack gap="10px">
                                <Link href={'https://www.youtube.com/@panaverse'}><Image src={"/images/youtube.svg"} alt="youtube" width={35} height={35} /></Link>
                                <Link href={'https://twitter.com/Panaverse_edu'}><Image src={"/images/twitter.svg"} alt="twitter" width={35} height={35} /></Link>
                                <Link href={'https://www.facebook.com/panaverse.dao/'}><Image src={"/images/facebook.svg"} alt="facebook" width={35} height={35} /></Link>
                                <Link href={'https://github.com/panaverse'}><Image src={"/images/github.svg"} alt="github" width={35} height={35} /></Link>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                
                <Box px={{lg:"80px", base:"20px"}} py={{lg:"60px", md:"20px", base:"30px"}}>
                    <Flex direction={{base:"column", md:"row" ,lg:"row"}} gap={{lg:"100px", base:"30px"}}>
                        <VStack align={"start"}>
                            <Text fontWeight={"650"} fontSize="20px" mb="15px">Company</Text>
                            <Link href={''}><Text>About Us</Text></Link>
                            <Link href={''}><Text>Blog</Text></Link>
                            <Link href={''}><Text>Instructors</Text></Link>
                            <Link href={''}><Text>Testimonials</Text></Link>
                        </VStack>
                        <VStack align={"start"}>
                            <Text fontWeight={"650"} fontSize="20px" mb="15px">Support</Text>
                            <Link href={''}><Text>Help Center</Text></Link>
                            <Link href={''}><Text>Terms of Service</Text></Link>
                            <Link href={''}><Text>Legal</Text></Link>
                            <Link href={''}><Text>Privacy</Text></Link>
                        </VStack>
                    </Flex>
                </Box>

                <Box py={{lg:"80px", md:"20px"}} px={{lg:"20px", md:"20px"}} w="180px" h="133px">
                    <VStack>
                        <Text>Powered By</Text>
                        <Image src='/images/panacloud.png' />
                    </VStack>
                </Box>

            </Flex>
        </Box>
  )
}
