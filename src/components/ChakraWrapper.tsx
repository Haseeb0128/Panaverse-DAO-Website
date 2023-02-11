"use client";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import  type { ReactNode } from "react"

type Props = {
    children: ReactNode
}
function ChakraWrapper({children}:Props) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ChakraWrapper;