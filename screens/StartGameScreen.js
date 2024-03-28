import {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from './StartGameScreen.styles';

const StartGameScreen = ({pickedNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const inputTextHandler = enteredText => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const submitHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }

    pickedNumber(chosenNumber);
  };

  return (
    <View style={styles.inputButtonContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputTextHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={submitHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
