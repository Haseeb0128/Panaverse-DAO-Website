"use client"
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react'
import Image from 'next/image'
import { RevealWrapper, RevealList } from 'next-reveal'

export default function About() {
    return (
      <>
        <Box bg={"white"} >
        <Container mt="120px" maxW={{lg:"1600px",md:"auto" ,base:"auto"}} mb="120px">
        <Flex px={{lg:"70px", md:"30px", base:"8px"}} direction={{lg:"row", md:"column-reverse", base:"column-reverse"}}>
            <RevealWrapper reset={true} origin="left">
            <Box bg={"white"} h={{lg:"auto", base:"auto"}} w={{lg:"700px", base:"auto"}} pt="70px" textAlign={{base:"center", md:"left"}} flexBasis="50%">
                <Heading mb={"20px"} fontSize="40px">Dr. Arif Alvi</Heading>
                <Heading mb={"20px"} fontSize="25px">President of the Islamic Republic of Pakistan</Heading>
                <Text mb="10px">Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
                <Text>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate” . He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’`</Text>
            </Box>
            </RevealWrapper>
            <Container bg={"white"} pt={"40px"} ml={{lg:"100px", md:"150px"}} flexBasis="50%">
              <RevealWrapper reset={true} origin="right" distance='30px'>
              <Image src={"/images/arif.png"} alt="Dr.Arif Alvi" height={347} width={365}  />
              </RevealWrapper>
            </Container>
        </Flex>
        <Container mt="18px" textAlign={{base:"center", md:"left"}} maxW={{lg:"1600px",md:"auto" ,base:"auto"}} px={{lg:"70px", md:"29px",base:"10px"}}>
        <RevealList reset={true} interval={60} delay={500} origin="left">
        <Text  mb="15px">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
        <Text  mb="15px">Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.</Text>
        <Text  mb="15px">During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM’s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.</Text>
        </RevealList>
        </Container>
    </Container>
    </Box>
        
      </>
    )
  }