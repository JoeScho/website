import React from 'react';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Flex,
  Link,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const footerBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="10vh" alignItems="center" justifyContent="center" bgColor={footerBackground}>
      <Link href="https://www.linkedin.com/in/joescho/" target="_blank" >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </Link>
      <Link m="2" href="https://github.com/JoeScho" target="_blank" >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </Link>
      <Link href="https://medium.com/@joescho" target="_blank" >
        <FontAwesomeIcon icon={faMedium} size="3x" />
      </Link>
      <Switch onChange={toggleColorMode} defaultChecked={colorMode} />
    </Flex>
  );
};

export default Footer;
