import React from 'react';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading, IconButton } from '@chakra-ui/react';

const HeadingWithBackButton = ({ title }) => (
  <Heading mb='60px'>
    <a href="/" style={{ marginRight: 20 }}>
      <IconButton icon={<FontAwesomeIcon icon={faBackward} />} />
    </a>
    {title}
  </Heading>
);

export default HeadingWithBackButton;
