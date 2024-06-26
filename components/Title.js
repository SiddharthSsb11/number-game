import {Text, StyleSheet} from 'react-native';

function Title({children, style}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#5b0430',
    borderRadius: 8
  }
});
