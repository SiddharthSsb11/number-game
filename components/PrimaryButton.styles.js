import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  outerButtonContainer: {
    margin: 4,
    overflow: 'hidden'
  },
  innerButtonContainer: {
    backgroundColor: '#900C3F',
    padding: 8,
    borderRadius: 24,
    elevation: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  },

  //ios ripple
  pressed: {
    opacity: 0.75
  }
});
