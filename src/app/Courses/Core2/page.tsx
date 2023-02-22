"use client"
import { Heading, Text, Box, Center, Flex, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'
import { RevealList, RevealWrapper } from 'next-reveal'


export default function Home() {
  return (
    <>
      <Container maxW={{ lg: "1250px", md: "auto" }} px={{ lg: "80px", md: "40px", base: "20px" }}>
        <RevealList interval={60} delay={200} origin="top" reset={true} distance="100px">
          <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>Detailed Course Syllabus</Heading>
          <Heading mt="20px" textAlign={"center"}>Quarter 2 (Core)</Heading>
          <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
          <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
          <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
          <Text mt="10px" textAlign={"center"}>The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</Text>
          <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
        </RevealList>
      </Container>

      <Center mt="10px">
        <Flex gap={"20px"} direction={{ md: "column", base: "column", lg: "row" }} align={{ base: "center", lg: "initial" }}>
          <RevealWrapper reset={true} origin="left">
            <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} borderRadius={"12px"}>
              <VStack align={"start"} p="20px">
                <Text fontSize={"18px"} fontWeight="640">Next.js 13 Web Development</Text>
                <HStack>

                  <Link href='https://beta.nextjs.org/docs' target={"_blank"}>Next 13 Official Documentation</Link>
                </HStack>
                <HStack>

                  <Link href='https://beta.reactjs.org/learn' target={"_blank"}>Latest Learn React Official Website</Link>
                </HStack>
                <HStack>

                  <Link href='https://github.com/panaverse/learn-nextjs' target={"_blank"}>Learn Next.js 13 Learning Repo</Link>
                </HStack>
              </VStack>
            </Box>
          </RevealWrapper>
          <RevealWrapper reset={true} origin="right" distance='15px'>
            <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{ base: "206px", md: "155px", lg: "163px" }} borderRadius={"12px"}>
              <VStack align={"start"} p="20px">
                <Text fontSize={"18px"} fontWeight="640">Next.js 13 using Chakra UI (Remote Zoom Class)</Text>
                <HStack>

                  <Link href='https://www.freecodecamp.org/news/css-flexbox-complete-guide/' target={"_blank"}>CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</Link>
                </HStack>
                <HStack>

                  <Link href='https://chakra-ui.com/getting-started' target={"_blank"}>Chakra UI Docs</Link>
                </HStack>
              </VStack>
            </Box>
          </RevealWrapper>
        </Flex>
      </Center>
      <Center mt="20px">
        <Flex gap="20px" direction={{ md: "column", base: "column", lg: "row" }} align={{ base: "center", lg: "initial" }}>
          <VStack gap="15px">
          <RevealWrapper reset={true} origin="left">
            <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} borderRadius={"12px"}>
              <VStack align={"start"} p="20px">
                <Text fontSize={"18px"} fontWeight="640">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</Text>
                <HStack>

                  <Link href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa' target={"_blank"}>Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano</Link>
                </HStack>
                <HStack>

                  <Link href='https://www.figma.com/community/file/768809027799962739' target={"_blank"}>Figma Design Kit for TailwindCSS</Link>
                </HStack>
                <HStack>

                  <Link href='https://www.figma.com/community/file/971408767069651759' target={"_blank"}>Chakra UI Figma Kit</Link>
                </HStack>
              </VStack>
            </Box>
            </RevealWrapper>
            <RevealWrapper reset={true} origin="left">
            <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h="119px" borderRadius={"12px"}>
              <VStack align={"start"} p="20px">
                <Text fontSize={"18px"} fontWeight="640">API Routes with Next.js (Remote Zoom Class)</Text>
                <HStack>

                  <Link href='https://nextjs.org/docs/api-routes/introduction' target={"_blank"}>API Routes</Link>
                </HStack>
              </VStack>
            </Box>
            </RevealWrapper>
          </VStack>
          <RevealWrapper reset={true} origin="right" distance='15px'>
          <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{base:"542px",md:"371px",lg:"380px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">AWS Application Composer (Remote Zoom Class)</Text>
              <HStack>

                <Link href='https://www.youtube.com/watch?v=BujE_tik5r8' target={"_blank"}>What is AWS Application Composer?</Link>
              </HStack>
              <HStack>

                <Link href='https://www.youtube.com/watch?v=p411uh363jQ' target={"_blank"}>Event-driven apps with AWS Application Composer</Link>
              </HStack>
              <HStack>

                <Link href='https://aws.amazon.com/application-composer/' target={"_blank"}>Visually design and build serverless applications quickly</Link>
              </HStack>
              <HStack>

                <Link href='https://aws.amazon.com/free/' target={"_blank"}>AWS Free Tier</Link>
              </HStack>
              <Text>For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</Text>
            </VStack>
          </Box>
          </RevealWrapper>
        </Flex>
      </Center>
      <Center mt="20px">
        <Flex gap={"20px"} direction={{ md: "column", base: "column", lg: "row" }} align={{ base: "center", lg: "initial" }}>
        <RevealWrapper reset={true} origin="left">
          <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{base:"211px", md:"163px", lg:"163px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">SQL and Prisma</Text>
              <HStack>

                <Link href='https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres' target={"_blank"}>Start from scratch with relational databases</Link>
              </HStack>
              <HStack>

                <Link href='https://www.youtube.com/watch?v=5hzZtqCNQKk' target={"_blank"}>SQL For Beginners Video Tutorial</Link>
              </HStack>
              <HStack>

                <Link href='https://www.freecodecamp.org/news/dbms-and-sql-basics/' target={"_blank"}>Database Management Systems and SQL – Tutorial for Beginners</Link>
              </HStack>
            </VStack>
          </Box>
          </RevealWrapper>
          <RevealWrapper reset={true} origin="right" distance="15px">
          <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{base:"206px", md:"131px", lg:"163px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">APIs with Next.js and tRPC (Remote Zoom Class)</Text>
              <HStack>

                <Link href='https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/' target={"_blank"}>Build a tRPC CRUD API Example with Next.js	</Link>
              </HStack>
              <HStack>

                <Link href='https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/' target={"_blank"}>Stop building REST APIs for your Next.js apps, use tRPC instead</Link>
              </HStack>
            </VStack>
          </Box>
          </RevealWrapper>
        </Flex>
      </Center>
      <Center mt="20px" mb="120px">
        <Flex gap={"20px"} direction={{ md: "column", base: "column", lg: "row" }} align={{ base: "center", lg: "initial" }}>
        <RevealWrapper reset={true} origin="left">
          <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{base:"150px",md:"99px",lg:"177px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Next.js 13 using TailwindCSS (Remote Zoom Class)</Text>
              <HStack>

                <Link href='https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/' target={"_blank"}>Modern CSS with Tailwind, Second Edition by Noel Rappin</Link>
              </HStack>
            </VStack>
          </Box>
          </RevealWrapper>
          <RevealWrapper reset={true} origin="right" distance='15px'>
          <Box bg="#CECCCC" w={{ lg: "500px", md: "500px", base: "320px" }} h={{base:"228px", md:"177px",lg:"177px"}} borderRadius={"12px"}>
            <VStack align={"start"} p="20px">
              <Text fontSize={"18px"} fontWeight="640">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</Text>
              <HStack>

                <Link href='https://github.com/panaverse/learn-multicloud-api-development ' target={"_blank"}>Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</Link>
              </HStack>
            </VStack>
          </Box>
          </RevealWrapper>
        </Flex>
      </Center>

    </>
  )
}