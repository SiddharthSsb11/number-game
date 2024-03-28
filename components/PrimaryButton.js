import {View, Text, Pressable} from 'react-native';
import {styles} from './PrimaryButton.styles';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
        android_ripple={{color: '#640233'}}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
