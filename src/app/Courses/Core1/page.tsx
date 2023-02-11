"use client"
import { Box, Flex, Heading, HStack, Text, VStack, Icon, Link, Center, Container } from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>Detailed Course Syllabus</Heading>
      <Heading mt="30px" textAlign={"center"}>Quarter 1 (Core)</Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>CS-101: Object-Oriented Programming using TypeScript</Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
       </Container>

      <Center>
      <Flex gap={"20px"} direction={{md:"column", base:"column",lg:"row"}} align={{base:"center",lg:"initial"}}>
      <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}}  mt="10px">
        <VStack align={"start"} p="20px">
        <Text fontSize={"18px"} fontWeight="640">HTML and CSS (Homework):</Text>
          <HStack>
           
          <Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'} target="_blank"><Text ml="5px">Learn HTML by Hira Khan (Watch Recorded Videos)</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'} target="_blank"><Text ml="5px">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</Text></Link>
          </HStack>
        </VStack>
      </Box>
      <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}}  mt="10px">
        <VStack align={"start"} p="20px">
        <Text fontSize={"18px"} fontWeight="640">Web 3.0 and Metaverse Theory:</Text>
        <HStack>
          
          <Link href={'https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing'} target="_blank"><Text ml="5px">Introduction to Panaverse DAO</Text></Link>
        </HStack>
        <HStack>
        
          <Link href={'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing'} target="_blank"><Text ml="5px">Web 3.0 User Guide</Text></Link>
        </HStack>
        <HStack>
          
          <Link href={'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing'} target="_blank"><Text ml="5px">Virtual and Augmented  Metaverse User Guide</Text></Link>
        </HStack>  
        </VStack>
      </Box>
      </Flex>
      </Center>
    <Center mt="20px">
    <Flex gap="20px" direction={{md:"column", base:"column",lg:"row"}} align={{base:"center",lg:"initial"}}>
    <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}}>
        <VStack align={"start"} p="20px">
        <Text fontSize={"18px"} fontWeight="640">Fundamentals of JavaScript:</Text>
        <HStack>
          
          <Link href={'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo'} target="_blank"><Text ml="5px">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</Text></Link>
          </HStack>
          <HStack>
            
          <Link href={'https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4'} target="_blank"><Text ml="5px">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</Text></Link>
          </HStack>
          <HStack>
          
          <Link href={'https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional'} target="_blank"><Text ml="5px">JavaScript Book Code</Text></Link>
          </HStack>
          <HStack>
          
          <Link href={'https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md'} target="_blank"><Text ml="5px">Getting Started Exercises with JavaScript and Node.js</Text></Link>
          </HStack>
          <Text pl="10px" fontWeight={600}>Fundamentals of JavaScript and Node.js Quiz Topics:</Text>
          <Text pl="30px">Background of JavaScript and How to use JavaScript in Browser</Text>
          <Text pl="30px">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</Text>
          <HStack>
           
           <Link href={'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing'} target="_blank"><Text ml="5px">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm</Text></Link> 
          </HStack>
          <HStack pl="10px" pr="10px">
           
           <Link href={'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing'} target="_blank"><Text>How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs</Text></Link> 
          </HStack>
          <Text pl="30px">Using Arrays and Objects in Node.js Programs (Chapter 3 of JavaScript from Beginner to Professional)</Text>
          <Text pl="30px">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</Text>
          <Text pl="30px">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</Text>
          <Text pl="30px">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</Text>
          <Text pl="30px">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</Text>
          <HStack>
           
           <Link href={'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript'} target="_blank"><Text ml="5px">JavaScript promises, mastering the asynchronous</Text></Link> 
          </HStack>
          <HStack>
           
           <Link href={'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg'} target="_blank"><Text ml="5px">New JavaScript Features in ECMAScript 2022 and 2021</Text></Link> 
          </HStack>
          </VStack>
      </Box>
        <VStack gap="12px">
        <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}}>
        <VStack align={"start"} p="20px">
        <Text ml="10px" fontSize={"18px"} fontWeight="640">Object-Oriented Programming with TypeScript:</Text>
          <HStack>
           
          <Link href={'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1'} target="_blank"><Text ml="5px">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://github.com/panaverse/learn-typescript'} target="_blank"><Text ml="5px">Learning Repository</Text></Link>
          </HStack>
          <HStack>
          
          <Link href={'https://www.learningtypescript.com/'} target="_blank"><Text ml="5px">In Class Companion projects and articles for Learning TypeScrip</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://github.com/panaverse/typescript-node-projects'} target="_blank"><Text ml="5px">Homework Project</Text></Link>
          </HStack>
          <Text pl="30px">Fundamentals of TypeScript Quiz</Text>
          <Text pl="30px">TypeScript Professional Proficiency Quiz</Text>
        </VStack>
      </Box>
      <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}} mt="20px">
        <VStack align={"start"} p="20px">
        <Text ml="10px" fontSize={"18px"} fontWeight="640">TypeScript for React: </Text>
          <HStack>
            
          <Link href={'https://profy.dev/article/react-typescript'} target="_blank"><Text ml="5px">Minimal TypeScript Crash Course For React With Interactive Code Exercises</Text></Link>
          </HStack>
        </VStack>
      </Box>
      <Box bg="#50E09F" borderRadius={"12px"} w={{lg:"500px",md:"500px", base:"320px"}} mt="30px">
        <VStack align={"start"} p="20px">
        <Text ml="10px" fontSize={"18px"} fontWeight="640">Quarter Break Assignments and Quizzes</Text>
        <Text pl="30px">During the Quarter Break, we do the following Assignments: </Text>
          <HStack>
           
          <Link href={'https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge'} target="_blank"><Text ml="5px">Cloud To Edge</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app'} target="_blank"><Text ml="5px">To Do Application using Next JS 13</Text></Link>
          </HStack>
          <HStack>
          
          <Link href={'https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui'} target="_blank"><Text ml="5px">Pricing UI</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'} target="_blank"><Text ml="5px">Build a Panaverse DAO Syllabus Website using Next.js 13</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'} target="_blank"><Text ml="5px">Build a new PIAIC Website using Next.js 13</Text></Link>
          </HStack>
          <Text pl="30px">After completing the above Five Assignments everyone will appear in the following two Quizzes covering the following: </Text>
          <Text pl="10px" fontWeight={600}>Fundamentals of Version Control with Git Quiz:</Text>
          <HStack pl={"10px"}>
            
          <Link href={'https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF'} target="_blank"><Text ml="5px">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</Text></Link>
          </HStack>
          <Text>Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</Text>
          <HStack>
           
          <Link href={'https://try.github.io/levels/1/challenges/1'} target="_blank"><Text ml="5px">For Practice</Text></Link>
          </HStack>
          <HStack>
           
          <Link href={'https://www.datacamp.com/courses/introduction-to-git-for-data-science'} target="_blank"><Text ml="5px">Homework</Text></Link>
          </HStack>
          <Text pl="10px" fontWeight={600}>TypeScript Proficiency Quiz:</Text>
          <HStack>
         
          <Link href={'https://github.com/panaverse/learn-typescript'} target="_blank"><Text ml="5px">Study Material</Text></Link>
          </HStack>
        </VStack>
      </Box>
        </VStack>
    </Flex>
</Center>
    </>
  )
}