"use client"
import React from 'react'
import {Box, Center, Container, Grid, HStack, SimpleGrid, Text} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <Box bg="#7B7A7A">
        <Container maxW="1600px">
            <SimpleGrid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)' ,lg:'repeat(5, 1fr)'}} gap="20px">
                <Box py="30px" w={{lg:"400px"}}  textAlign={{lg:"left", md:"center",base:"center"}} px={{lg:"20px", md:"none", base:"none"}}>
                   <Box pl={{lg:"0px", md:"100px", base:"80px"}}><Image src='/images/panaverselogo.png' alt='panaverselogo' width={180} height={100} ></Image></Box>
                    <Text mt="15px">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                </Box>
                <Box pt="70px"  textAlign={{lg:"left", md:"center",base:"center"}} px={{lg:"20px", md:"none", base:"none"}}>
                    <Text fontSize={"25px"} fontWeight="650" mb="20px">Company</Text>
                    <Grid>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>About Us</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Blog</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Instructors</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Testimonials</Text></Link>
                    </Grid>
                </Box>
                <Box pt="70px"  textAlign={{lg:"left", md:"center",base:"center"}} px={{lg:"20px", md:"none", base:"none"}}>
                <Text fontSize={"25px"} fontWeight="650" mb="20px">Support</Text>
                    <Grid>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Help Center</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Terms of Service</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Legal</Text></Link>
                    <Link href={'/'}><Text _hover={{ color: "gray.100" }}>Privacy</Text></Link>
                    </Grid>
                </Box>
                <Box pt="70px" textAlign={{lg:"left", md:"center",base:"center"}} px={{lg:"20px", md:"none", base:"none"}}>
                <Text fontSize={"25px"} fontWeight="650" mb="20px">Follow Us</Text>
                <Grid>
                <Text>Please follow us on our Social Media Platforms in order to keep updated with latest news.</Text>
                <HStack gap="10px" m={{lg:"0", md:"auto", base:"auto"}} pt={{lg:"10px", md:"10px", base:"10px"}}>
                                <Link href={'https://www.youtube.com/@panaverse'} target="_blank"><Image src={"/images/youtube.svg"} alt="youtube" width={35} height={35} /></Link>
                                <Link href={'https://twitter.com/Panaverse_edu'} target="_blank"><Image src={"/images/twitter.svg"} alt="twitter" width={35} height={35} /></Link>
                                <Link href={'https://www.facebook.com/panaverse.dao/'} target="_blank"><Image src={"/images/facebook.svg"} alt="facebook" width={35} height={35} /></Link>
                                <Link href={'https://github.com/panaverse'} target="_blank"><Image src={"/images/github.svg"} alt="github" width={35} height={35} /></Link>
                </HStack>
                </Grid>
                </Box>
                <Box pt={{lg:"10px", base:"60px"}}  pb={{lg:"none", md:"15px", base:"15px"}} m={{lg:"auto", md:"auto", base:"auto"}}>
                    <Grid>
                    <Text mb="5px" textAlign={"center"} fontWeight="500">Powered By</Text>
                    <Image src='/images/panacloud.png' alt='panacloudlogo' width={150} height={77}  />
                    </Grid>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
