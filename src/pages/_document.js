import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { FlashlessScript } from 'chakra-ui-flashless';
import theme from '../theme';

export default class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head />
        <body>
          <FlashlessScript theme={theme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
