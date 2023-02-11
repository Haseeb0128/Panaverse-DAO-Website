"use client"
import {  Heading, Text, Box, Center, Flex, VStack, HStack, Icon, Link, Container } from '@chakra-ui/react'



export default function Home() {
  return (
    
      <>

      <Container maxW={{lg:"1250px", md:"auto"}} px={{lg:"80px",md:"40px",base:"20px"}}>
      <Heading textAlign={"center"} mt="120px" fontSize={"45px"}>
      Ambient Computing and IOT Specialization
      </Heading>
      <Heading mt="20px" textAlign={"center"}>
      Quarter 5
      </Heading>
      <Text mt="20px" fontSize={"20px"} fontWeight="640" textAlign={"center"} >
      AC-361: Embedded Programming using C and Rust
      </Text>
      <Text mt="10px" textAlign={"center"}>Duration: 13 Weeks</Text>
      <Text mt="10px" fontSize={"20px"} fontWeight="640" textAlign={"center"}>Course Description:</Text>
      <Text mt="10px" textAlign={"center"}>This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.</Text>
      <Text mt="20px" textAlign={"center"} fontSize={"20px"} fontWeight="640">Course Outline:</Text>
      </Container>

      <Center mt="15px">
        <Flex gap="20px" direction={{md:"column", base:"column",lg:"row"}} align={{base:"center",lg:"initial"}}>
        <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)</Text>
            <HStack>
              
              <Link href='https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar' target={"_blank"}>Presentation</Link>
            </HStack>
            <Text>What is the Fourth Industrial Revolution?</Text>
            <Text>What is IoT?</Text>
            <Text>Embedded Systems</Text>
            <Text>Hardware and Software for IoT</Text>
            <Text>Edge and Cloud Computing</Text>
            <Text>The future of IoT is AI</Text>
            <Text>Blockchain in the Internet of Things?</Text>
            <Text>IOT + AI + Blockchain: The Fourth Industrial Revolution has begun</Text>
            <Text>How will Matter change the IoT Infrastructure and address issues</Text>
            <Text>Metaverse and IoT</Text>
            <Text fontWeight={600}>Mid-Term I: Introduction to the Internet of Things (IOT) Quiz in Week 3</Text>
            <Text>Total Questions: 46, Total Time: 60 minutes</Text>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">The C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266</Text>
            <HStack>
              
              <Link href='https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing' target={"_blank"}>Download Link</Link>
            </HStack>
          </VStack>
        </Box>
        </VStack>
        <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Introduction to C Part 1 (Weeks 3B, 4, and 5)</Text>
            <Text>C environment Setup for (Windows, Linux, and Mac OS systems)</Text>
            <Text>Chapters 1-2 of  “The C programming language”</Text>
            <HStack>
              
              <Text>Variable names types</Text>
            </HStack>
            <HStack>
              
              <Text>Data types and sizes</Text>
            </HStack>
            <HStack>
              
              <Text>Constants</Text>
            </HStack>
            <HStack>
              
              <Text>Arithmetic operations</Text>
            </HStack>
            <HStack>
              
              <Text>Logical and relational operators</Text>
            </HStack>
            <HStack>
              
              <Text>Type conversions.</Text>
            </HStack>
            <HStack>
              
              <Text>Bitwise operators</Text>
            </HStack>
            <HStack>
              
              <Text>Conditional expressions</Text>
            </HStack>
            <Text>Programming Assignments will also be given.</Text>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">C Programming Part 2 (Weeks 6 and 7)</Text>
            <Text>Topics 3 and 4  of  “The C programming language”</Text>
            <HStack>
              
              <Text>Control flow statements (else if, loops, switch, break continue)</Text>
            </HStack>
            <HStack>
              
              <Text>Function and Program structure(Returning and non-returning, scope rules, Recursion)</Text>
            </HStack>
            <Text>Programming Assignments will also be given.</Text>
          </VStack>
        </Box>
        </VStack>
        </Flex>
        </Center>
        <Center mt="20px">
        <Flex gap="20px" direction={{md:"column", base:"column",lg:"row"}} align={{base:"center",lg:"initial"}}>
          <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Introduction to Embedded systems Part 1 (Weeks 8)</Text>
            <Text>Basic Electronics and Introduction to microcontrollers</Text>
            <Text>Chapter 1 of  “Internet of things with ESP8266”</Text>
            <HStack>
              
              <Text>Arduino IDE installation and env setup for ESP8266</Text>
            </HStack>
            <HStack>
              
              <Text>Burning your first code on ESP8266</Text>
            </HStack>
            <Text>Programming Assignments will also be given.</Text>
            <Text>Mid-Term II: C Programming Quiz 1 in Week 9</Text>
            <Text>Total Questions: 62, Total Time: 75 minutes</Text>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Introduction to Embedded systems Part 2 (Weeks 9-12)</Text>
            <Text>Chapters 2-5 of  “Internet of things with ESP8266”</Text>
            <HStack>
              
              <Link href='https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/' target="_blank">Connecting your hardware to wifi.</Link>
            </HStack>
            <HStack>
              
              <Link href='https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number' target="_blank">Reading data from GPIOs.</Link>
            </HStack>
            <HStack>
              
              <Text>Controlling LEDs.</Text>
            </HStack>
            <HStack>
              
              <Link href='https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/' target="_blank">Reading data from digital sensors</Link>
            </HStack>
            <HStack>
              
              <Text>Cloud data logging</Text>
            </HStack>
            <HStack>
              
              <Link href='https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html' target="_blank">Link 1</Link>
            </HStack>
            <HStack>
              
              <Link href='https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform' target="_blank">Link 2</Link>
            </HStack>
            <HStack>
              
              <Link href='https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver' target="_blank">Link 3</Link>
            </HStack>
            <HStack>
              
              <Link href='https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud' target="_blank">Displaying data on the cloud.</Link>
            </HStack>
            <HStack>
              
              <Link href='https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/' target="_blank">Controlling controller remotely.</Link>
            </HStack>
            <HStack>
              
              <Text>Controlling a lamp anywhere in the world.</Text>
            </HStack>
            <HStack>
              
              <Text>Interacting with different web services.</Text>
            </HStack>
          </VStack>
        </Box>
        </VStack>
        <VStack gap="15px">
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Embedded Programming using Rust (Extra Weeks in the Course)</Text>
            <HStack>
              
              <Link href='https://www.rust-lang.org/what/embedded' target="_blank">Embedded devices</Link>
            </HStack>
            <HStack>
              
              <Link href='https://crates.io/crates/esp8266' target="_blank">esp8266</Link>
            </HStack>
          </VStack>
        </Box>
        <Box bg="#50E09F" w={{lg:"500px",md:"500px", base:"320px"}} borderRadius={"12px"}>
          <VStack align={"start"} p="20px" mt="5px">
            <Text fontSize={"18px"} fontWeight="640">Hardware Requirements</Text>
            <Text>Esp8266 (Node MCU)</Text>
            <Text>Jumper Wires</Text>
            <Text>Bread Board</Text>
            <Text>LEDs</Text>
            <Text>Sensors: (Dht11, ultrasonic sensor, IR sensor)</Text>
          </VStack>
        </Box>
        </VStack>
        </Flex>
</Center>
</>
    
  )
}