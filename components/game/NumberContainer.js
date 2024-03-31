import {View, Text} from 'react-native';
import {styles} from './NumberContainer.styles';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
