import React from 'react';
import {
  Flex, Heading, Text,
} from '@chakra-ui/react';
import getGreetings from '../js/getGreetings';
import workHistory from '../data/work';
import Card from '../components/Card';

export default function Home() {
  const { header, subheader } = getGreetings();
  const { company, title } = workHistory[0];

  return (
    <Flex height='90vh' mx='5%' alignItems='center' justifyContent='center'>
      <main>
        <Heading size='3xl'>
          {header}
        </Heading>

        <Text fontSize='xl' mb={6}>
          {subheader}
        </Text>

        <Text>I'm Joe, a {title} at <strong>{company}</strong> 🧑‍💻</Text>
        <Text>Passionate about open source, best practices, and mental health.</Text>

        <Flex justifyContent='space-between' mt={8}>
          <Card href='/work' heading='Work History' body="Check out what I've been up to since I graduated" />
          <Card href='/education' heading='Education' body='Grades, subjects, and cheap noodles' />
        </Flex>
        <Flex justifyContent='space-between' mt={6}>
          <Card href='/portfolio' heading='Portfolio' body="I learn by making things, here's what I've made" />
        </Flex>
      </main>
    </Flex >
  );
}
