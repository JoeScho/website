import React from 'react';
import {
  Link, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';

const Card = ({ href, heading, body }) => {
  const cardBackground = useColorModeValue('gray.100', 'gray.700');
  const cardHoverText = useColorModeValue('gray.600', 'gray.100');

  return (
    <Link
      href={href}
      w='48%'
      bg={cardBackground}
      border='1px'
      borderColor={cardBackground}
      borderRadius='md' p={3}
      _hover={{
        color: cardHoverText,
        borderColor: cardHoverText,
      }}
    >
      <Heading size='md' mb={2}>{heading}</Heading>
      <Text>{body}</Text>
    </Link>
  );
};

export default Card;
