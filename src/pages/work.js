import React from 'react';
import workHistory from '../data/work';
import {
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
  List,
  Text,
  Stack
} from '@chakra-ui/react';

export default function Work() {
  return (
    <Flex alignItems='center' justifyContent='center' flexDirection='column'>
      <Heading>
        <a href="/">&larr;</a> Work History
      </Heading>

      <UnorderedList listStyleType='none'>
        {
          workHistory.map((role) => (
            <ListItem key={role.title}>
              <Stack direction="row" width="60%" p={4}>
                <Flex flexDirection='column'>
                  <Heading size="sm">{role.title} / {role.company} {role.date}</Heading>
                  <UnorderedList>
                    {role.description.map(
                      (description) => <ListItem key={description}>{description}</ListItem>,
                    )}
                  </UnorderedList>
                  <strong>| {role.tech.map((tech) => (`${tech} | `))}</strong>
                </Flex>
              </Stack>
            </ListItem>
          ))
        }
      </UnorderedList>

      {/* <ul>
        <hr />
        {
          workHistory.map((role) => (
            <a href={role.link} target="_blank">
              <li key={role.title}>
                <h3>{role.title} <company>/ {role.company}</company> <date>{role.date}</date></h3>

                <ul>
                  {role.description.map(
                    (description) => <li key={description}>{description}</li>,
                  )}
                </ul>
                <strong>| {role.tech.map((tech) => (`${tech} | `))}</strong>
                <hr />
              </li>
            </a>
          ))
        }
      </ul> */}
    </Flex>
  );
}
