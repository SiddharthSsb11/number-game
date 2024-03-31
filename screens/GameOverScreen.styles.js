import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#3b021f',
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    // fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    // fontFamily: 'open-sans-bold',
    color: '#ddb52f'
  }
});
