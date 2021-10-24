import { FONTS } from './../../theme/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 12
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD
  }
});