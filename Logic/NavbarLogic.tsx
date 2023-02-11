import { Flex, Button, Spacer, Img, Box, Text} from '@chakra-ui/react'
import Link from 'next/link'


export default function Navbar() {
  return (
    
    <Flex position={"fixed"}
     w="100%" 
     top={"0"}
     zIndex="1"
     justifyContent="space-evenly" 
     pt={"4px"} pb={"4px"} pl="15px" pr="15px" gap="35px" bg={"#929090"} alignItems="center">
        <Box>
        <Link href={'/'}><Img src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" w={"140px"} h={"80px"} /></Link>
        </Box>
        <Link href='/Courses'><Text fontWeight={"600"}>Courses</Text></Link>
        <Link href={'/Leaders'}><Text fontWeight={"600"}>Leaders</Text></Link>
        <Link href={'/About'}><Text fontWeight={"600"}>About</Text></Link>
        <Spacer />
        <Link href={'https://portal.piaic.org/'} target="_blank">
        <Button bg="#EB2323" color="white" w={"87px"} h="36.74px">Apply</Button>
        </Link>
    </Flex>

  )
}
