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
  useColorModeValue,
} from '@chakra-ui/react';
import workHistory from '../data/work';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

export default function Work() {
  const tagHoverBackground = useColorModeValue('gray.300', 'gray.500');

  return (
    <Flex minHeight='90vh' mx="5%" alignItems='center' justifyContent='center' flexDirection='column'>
      <HeadingWithBackButton title='Work History' />

      <Accordion
        width="60%"
        mb={30}
        allowToggle
        sx={{
          '@media only screen and (max-width: 600px)': {
            width: '90%',
          },
        }}
      >
        {
          workHistory.map((role) => (
            <AccordionItem>
              <h2>
                <AccordionButton key={role.title}>
                  <Box flex="1" textAlign="left" mr={5}>
                    <strong>{role.title}</strong> @ {role.company}
                  </Box>
                  <Tag
                    marginLeft='auto'
                    py={1}
                    sx={{
                      '@media only screen and (max-width: 600px)': {
                        width: '30%',
                      },
                    }}
                  >
                    {role.date}
                  </Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <UnorderedList>
                  {role.description.map(
                    (description) => <ListItem key={description}>{description}</ListItem>,
                  )}
                </UnorderedList>
                {role.tech.map(
                  (tech) => <Tag
                    mt={6}
                    mx={1}
                    _hover={{
                      backgroundColor: tagHoverBackground,
                    }}
                  >{tech}</Tag>,
                )}
              </AccordionPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </Flex>
  );
}
