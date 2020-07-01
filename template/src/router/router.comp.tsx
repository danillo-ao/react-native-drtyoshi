import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@screens/home/home.screen';
import routes from '@router/routes.config';

const Stack = createStackNavigator();
const Router: React.FC<any> = (): React.FunctionComponentElement<any> => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.index} screenOptions={{ headerShown: false }}>
        {/* routes here */}
        <Stack.Screen name={routes.home} component={HomeScreen} />
        {/* end of routes */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
