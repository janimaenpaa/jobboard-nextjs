import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

type ProviderProps = {
  children?: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
