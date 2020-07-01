import * as React from 'react';
import {HomeDescription, HomeTitle, ImageLogo, PageWrapper} from './home.styles';
import Icon from '@components/icons/icon.comp';

const HomeScreen: React.FC<any> = (): React.FunctionComponentElement<any> => {

  return (
    <PageWrapper>

      <ImageLogo source={{ uri: 'https://iili.io/JmYBfV.png' }} />

      <HomeTitle>
        Welcome home, Dino Template!
      </HomeTitle>
      <HomeDescription>
        This is just an egg, you must take care of it, make it gandy, you will decide what will come out of here.
      </HomeDescription>
      <HomeDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </HomeDescription>

    </PageWrapper>
  );

};

export default HomeScreen;
