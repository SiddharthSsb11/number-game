import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    borderColor: '##3b021f',
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ddb52f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: 'open-sans',
    fontWeight: '700'
  }
});
