import React from 'react';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Flex,
  Link,
  Switch,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const footerBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="10vh" alignItems="center" justifyContent="center" bgColor={footerBackground}>
      <a href="https://www.linkedin.com/in/joescho/" target="_blank" >
        <IconButton icon={<FontAwesomeIcon icon={faLinkedin} size="3x" />} />
      </a>
      <a href="https://github.com/JoeScho" target="_blank" style={{ margin: 10 }} >
        <IconButton icon={<FontAwesomeIcon icon={faGithub} size="3x" />} />
      </a>
      <a href="https://medium.com/@joescho" target="_blank" >
        <IconButton icon={<FontAwesomeIcon icon={faMedium} size="3x" />} />
      </a>
      <Switch position='absolute' right='5%' onChange={toggleColorMode} checked={colorMode === 'light'} />
    </Flex>
  );
};

export default Footer;
