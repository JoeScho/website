import React from 'react';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, IconButton, useColorModeValue } from '@chakra-ui/react';

const HeadingWithBackButton = ({ title }) => {
  const buttonBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Heading mb='60px'>
      <a href="/" style={{ marginRight: 20 }}>
        <IconButton
          icon={<FontAwesomeIcon icon={faBackward} />}
          backgroundColor={buttonBackground}
        />
      </a>
      {title}
    </Heading>
  );
};

export default HeadingWithBackButton;
