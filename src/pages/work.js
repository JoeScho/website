/* eslint-disable max-len */
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
  Input,
  TagCloseButton,
} from '@chakra-ui/react';
import workHistory from '../data/work';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

export default function Work() {
  const tagHoverBackground = useColorModeValue('gray.300', 'gray.500');

  const [searchTags, setSearchTags] = React.useState([]);

  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      const { value } = event.target;

      if (!searchTags.includes(value)) {
        setSearchTags([...searchTags, event.target.value]);
      }

      // eslint-disable-next-line no-param-reassign
      event.target.value = '';
    }
  };

  const removeTag = (tag) => {
    setSearchTags(searchTags.filter((t) => t !== tag));
  };

  const renderTags = () => (
    <Flex direction='row'>
      {searchTags.map(
        (tech) => <Tag
          mx={1}
          _hover={{
            backgroundColor: tagHoverBackground,
          }}
          key={tech}
        >
          {tech}
          <TagCloseButton onClick={() => removeTag(tech)} />
        </Tag>,
      )}
    </Flex>
  );

  const getSelectedRoleIndexes = () => {
    if (!searchTags.length) return [];

    const selectedRoles = workHistory.filter((role) => {
      let allMatched = true;

      // eslint-disable-next-line consistent-return
      searchTags.forEach((searchTag) => {
        if (!role.tech.includes(searchTag)) {
          allMatched = false;
        }
      });

      return allMatched;
    });

    const selectedIndexes = [];

    selectedRoles.map((role) => selectedIndexes.push(workHistory.indexOf(role)));

    return selectedIndexes;
  };

  return (
    <Flex minHeight='90vh' mx="5%" alignItems='center' justifyContent='center' flexDirection='column'>
      <HeadingWithBackButton title='Work History' />

      {renderTags()}
      <Input
        width="60%"
        variant="flushed"
        placeholder={searchTags.length ? '' : "Search for technologies I've used. E.g. 'NodeJS'"}
        onKeyDown={handleSubmit}
        mb={6}
      />

      <Accordion
        width="60%"
        mb={30}
        allowMultiple
        {...(searchTags.length ? { index: getSelectedRoleIndexes() } : {})}
        sx={{
          '@media only screen and (max-width: 600px)': {
            width: '90%',
          },
        }}
      >
        {
          workHistory.map((role) => (
            <AccordionItem key={`${role.title}${role.company}`} >
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
                    key={tech}
                    backgroundColor={searchTags.includes(tech) ? tagHoverBackground : ''}
                  >
                    {tech}
                    {searchTags.includes(tech) && <TagCloseButton onClick={() => removeTag(tech)} />}
                  </Tag>,
                )}
              </AccordionPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </Flex>
  );
}
