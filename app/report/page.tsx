'use client';

import { Section, Summary } from '@/components/Report';
import TopBar from '@/components/TopBar';
import { Flex, Text, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';

const navy = '#1E1E1E';

export const metadata: Metadata = {
  title: 'Report',
  description: 'Your summarised health report',
  openGraph: {
    title: 'Upload health report',
    description: 'Upload your health report for analysis',
    url: 'https://mediclear.vercel.app',
    siteName: 'MediClear',
    images: [
      {
        url: 'https://mediclear.vercel.app',
        width: 800,
        height: 600
      }
    ],
    locale: 'en-US',
    type: 'website'
  }
};

const Report = () => {
  return (
    <Flex w='100%' h='100vh' flex={1} direction='column'>
      <TopBar />
      <VStack
        spacing='32px'
        paddingTop='35px'
        padding='35px 50px'
        align='stretch'
      >
        <Text fontSize='56px' as='b' fontWeight='black' color={navy}>
          Simplified Health Report
        </Text>
        <Summary />
        <Section />
      </VStack>
    </Flex>
  );
};

export default Report;
