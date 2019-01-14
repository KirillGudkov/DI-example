import { DIBuilder } from "mvp-di";
import {AppRegistry} from 'react-native';
import App from './src/App';
import DITypes from "./src/Config/DITypes";

DIBuilder.build(DITypes);
console.disableYellowBox = true;
AppRegistry.registerComponent('react-native-sandbox', () => App);
