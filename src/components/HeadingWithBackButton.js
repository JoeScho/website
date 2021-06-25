import React from 'react';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, IconButton, useColorModeValue } from '@chakra-ui/react';

const HeadingWithBackButton = ({ title }) => {
  const buttonBackground = useColorModeValue('white', 'gray.800');

  return (
    <Heading my='30px'>
      <a href="/" style={{ marginRight: 20 }}>
        <IconButton
          icon={<FontAwesomeIcon icon={faBackward} size="1x" />}
          backgroundColor={buttonBackground}
          size="md"
        />
      </a>
      {title}
    </Heading>
  );
};

export default HeadingWithBackButton;
