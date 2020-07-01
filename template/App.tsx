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
import theme from '@theme/theme.config';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeView>
          <PageWrapper>

            <ImageLogo source={{ uri: 'https://iili.io/JmYBfV.png' }} />

          </PageWrapper>
        </SafeView>
      </>
    </ThemeProvider>
  );
};

export default App;


const SafeView = styled.SafeAreaView`
  flex: 1;
`;

const PageWrapper = styled.View`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
const ImageLogo = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
  ...props
}))`
  width: 160px;
  height: 160px;
  position: relative;
  margin: 16px 0;
`;
