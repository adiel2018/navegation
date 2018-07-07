import { Navigation } from 'react-native-navigation';

import SplashScreen from './../components/SplashScreen';
import ItemsList from './../modules/items';
import ItemScreen from './item/index';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('navegation.SplashScreen', () => SplashScreen, store, Provider);
  Navigation.registerComponent('navegation.HomeScreen', () => ItemsList, store, Provider);
  Navigation.registerComponent('navegation.ItemScreen', () => ItemScreen, store, Provider);
}