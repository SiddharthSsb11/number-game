import {View, Text, TextInput} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from './StartGameScreen.styles';

const StartGameScreen = () => {
  return (
    <View style={styles.inputButtonContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
