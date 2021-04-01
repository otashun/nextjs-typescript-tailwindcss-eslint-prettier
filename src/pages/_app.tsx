import { AppProps } from 'next/app';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
