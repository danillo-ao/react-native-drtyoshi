/**
 * Created by Danillo Alves de Oliveira
 * email: danillo.alves.o@gmail.com
 * github: https://github.com/danillo-ao/
 *
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Dino's template
 * https://github.com/danillo-ao/react-native-dino-template
 *
 * This template was created based on react-native-typescript-template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import { StatusBar } from 'react-native';
import theme from '@theme/theme';
import Router from '@router/router.comp';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </ThemeProvider>
  );
};

export default App;
