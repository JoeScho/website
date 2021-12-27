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
import { matchSorter } from 'match-sorter';
import workHistory, { tech as autocompleteOpts } from '../data/work';
import HeadingWithBackButton from '../components/HeadingWithBackButton';

const autocompleteOptions = [...new Set(Object.values(autocompleteOpts))];

export default function Work() {
  const tagHoverBackground = useColorModeValue('gray.300', 'gray.500');

  const [searchTags, setSearchTags] = React.useState([]);
  const [matches, setMatches] = React.useState([]);

  const addTag = (tag) => {
    if (!searchTags.includes(tag)) {
      setSearchTags([...searchTags, tag]);
    }
  };

  const handleSubmit = (event) => {
    const { value } = event.target;

    if (event.keyCode === 8 && (!value || value === '')) {
      setSearchTags(searchTags.slice(0, searchTags.length - 1));
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 1
      ? setMatches(matchSorter(autocompleteOptions, value))
      : setMatches([]);
  };

  const removeTag = (tag) => {
    setSearchTags(searchTags.filter((t) => t !== tag));
  };

  const renderTags = () => (
    <Flex direction='row'>
      {searchTags.map(
        (tech) => <Tag
          mx={1}
          py={1}
          mb={2}
          cursor='pointer'
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

  const clearInputField = () => {
    document.getElementById('user-input').value = '';
  };

  return (
    <Flex minHeight='90vh' mx="5%" alignItems='center' justifyContent='center' flexDirection='column'>
      <HeadingWithBackButton title='Work History' />

      <Flex
        width="60%"
        borderBottom="1px"
        mb={2}
        flexDirection="row"
        sx={{
          '@media only screen and (max-width: 600px)': {
            width: '90%',
          },
        }}
      >
        {renderTags()}
        <Input
          id="user-input"
          width="100%"
          variant="unstyled"
          placeholder={searchTags.length ? '' : "Search for technologies I've used. E.g. 'NodeJS'"}
          onKeyDown={handleSubmit}
          onChange={handleChange}
          mb={2}
          ml={1}
        />
      </Flex>
      <Flex width="60%" mb={2} flexDirection="row">
        {matches.length > 0 && matches.map((match) => <Tag
          mx={1}
          mb={2}
          cursor='pointer'
          _hover={{
            backgroundColor: tagHoverBackground,
          }}
          key={match}
          onClick={() => {
            addTag(match);
            setMatches([]);
            clearInputField();
          }}
        >{match}</Tag>)}
      </Flex>

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
                <UnorderedList mb={4}>
                  {role.description.map(
                    (description) => <ListItem key={description}>{description}</ListItem>,
                  )}
                </UnorderedList>
                {role.tech.map(
                  (tech) => <Tag
                    mx={1}
                    mb={2}
                    cursor='pointer'
                    _hover={{
                      backgroundColor: tagHoverBackground,
                    }}
                    key={tech}
                    backgroundColor={searchTags.includes(tech) ? tagHoverBackground : ''}
                    onClick={() => addTag(tech)}
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
