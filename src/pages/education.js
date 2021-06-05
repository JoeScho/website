import React from 'react';
import {
  Flex,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import educationHistory from '../data/education';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

export default function Work() {
  return (
    <Flex minH='90vh' mx="5%" alignItems='center' justifyContent='center' flexDirection='column'>
      <HeadingWithBackButton title='Education History' />

      <Accordion minWidth="60%" mb={30} allowToggle>
        {
          educationHistory.map((education) => (
            <AccordionItem key={education.level}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <strong>{education.level}</strong> @ {education.school}
                  </Box>
                  <Tag marginLeft='auto'>{education.date}</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <UnorderedList>
                  {education.description.map(
                    (description) => <ListItem key={description}>{description}</ListItem>,
                  )}
                </UnorderedList>

                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>Subject</Th>
                      <Th>Grade</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {education.results.map((result) => (
                      <Tr key={result.subject}>
                        <Td>{result.subject}</Td>
                        <Td>{result.grade}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </Flex>
  );
}
