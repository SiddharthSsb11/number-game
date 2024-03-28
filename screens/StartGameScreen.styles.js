import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputButtonContainer: {
    padding: 16,
    backgroundColor: '#72063c',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    // ios box-shadow styles
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black'
  },
  numberInput: {
    height: 50,
    width: 50,
    padding: 1,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
    // alignSelf: 'center'
  },

  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});
