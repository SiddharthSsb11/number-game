import {View, StyleSheet} from 'react-native';

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#5b0430',
    marginTop: 36,
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
  }
});
