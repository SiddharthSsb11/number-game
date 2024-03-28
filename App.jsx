import {useState} from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {styles} from './app.styles';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [isNumberPicked, setIsNumberPicked] = useState();
  const pickedNumberHandler = number => {
    setIsNumberPicked(number);
  };

  let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;

  if (isNumberPicked) {
    screen = <GameScreen />;
  }

  return (
    <ImageBackground
      source={require('./assets/images/dicetwo.jpeg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={{opacity: 0.75}}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  );
};

export default App;
