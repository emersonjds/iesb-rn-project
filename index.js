/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import wrappedRoutes from './src';

AppRegistry.registerComponent(appName, () => {
  return wrappedRoutes
});
