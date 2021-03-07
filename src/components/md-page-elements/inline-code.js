import { Code } from '@chakra-ui/react'
import React from 'react'
// import 'victormono'

export const InlineCode = ({ children }) => {
  return (
    <Code fontFamily="body" fontSize="lg" borderRadius="sm">
      {children}
    </Code>
  )
}
