"use client"
import { ChakraProvider } from "@chakra-ui/react"
import WithSubnavigation from "@/components/Navbar"
import SplitWithImage from "@/components/Features"

import LargeWithNewsletter from "@/components/Footer"
import SocialProfileSimple from "@/components/cards"
import CallToActionWithVideo1 from "@/components/HeroSection"
import BasicStatistics from "@/components/statistics"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ChakraProvider>
          <div>
          <WithSubnavigation/>
          <CallToActionWithVideo1/>
        <SplitWithImage/>
         
       
    <BasicStatistics/>
        <SocialProfileSimple/>
     
        <LargeWithNewsletter/>
          </div>
        </ChakraProvider>
   
  
      </body>
    </html>
  )
}
