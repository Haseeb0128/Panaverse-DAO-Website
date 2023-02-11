"use client"
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, Button, Spacer, Box, Text, IconButton, Menu, MenuButton, MenuItem, MenuList, Container, SimpleGrid, Stack} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
  return (
    <Box as="nav" role={"presentation"}>
      <Flex position={"fixed"} w="100%" top="0" zIndex="1" bg="#929090" minH={"90px"} align="center" py={{base:2}} px={{base:4}}>

      <Flex flex={{base:1}} justify={{base:"start", md:"start", lg:"start"}}>
        <Link href={'/'}>
        <Image src={'/images/plogo.png'} alt={'panaverselogo'} width={120} height={70}></Image>
        </Link>
        <Flex display={{base:"none", md:"flex", lg:"flex"}} ml={10} alignItems="center" flex={{lg:1,md:0,base:0}}>
          <Link href={'/Courses'}><Text px={4} fontWeight="550">Courses</Text></Link>
          <Link href={'/Leaders'}><Text px={4} fontWeight="550">Leaders</Text></Link>
          <Link href={'/About'}><Text px={4} fontWeight="550">About</Text></Link>
        </Flex>
        <Stack m="auto" flex={{base:0, md:1}} justify="flex-end" direction={"row"}>
          <Link href={'https://portal.piaic.org/'} target="_blank"><Button size={"lg"} bg="#EB2323"color={"white"}
          display={{base:"none", md:"flex", lg:"flex"}}
          >Apply</Button></Link>
        </Stack>

        <Box mt="15px" display={{ lg: 'none',md:'none' ,base: 'initial' }} mr={{base:"5px",md:"0px" ,lg:"0px"}}>
        <Menu>
          <MenuButton float='right'
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'/>
        <MenuList>
          <MenuItem>
          <Link href={'/'}>Home</Link>
          </MenuItem>
          <MenuItem>
          <Link href={'/Courses'}>Courses</Link>
          </MenuItem>
          <MenuItem>
          <Link href={'/Leaders'}>Leaders</Link>
          </MenuItem>
          <MenuItem>
          <Link href={'/About'}>About</Link>
          </MenuItem>
          <MenuItem>
          <Link href={'https://portal.piaic.org/'} target="_blank">Apply</Link>
          </MenuItem>
        </MenuList>
        </Menu>
      </Box>
      </Flex>

      
      
      </Flex>
    </Box>
  )
}
