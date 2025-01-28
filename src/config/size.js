import { Dimensions } from 'react-native';
import { sizes } from '../utils/sizes';
const { width, height } = Dimensions.get('window');
export const size = new sizes(height, width);