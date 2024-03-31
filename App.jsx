import {useState} from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {styles} from './app.styles';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [isNumberPicked, setIsNumberPicked] = useState();

  const [gameIsOver, setGameIsOver] = useState(true);

  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = number => {
    setIsNumberPicked(number);
    setGameIsOver(false);
  };

  const gameOverHandler = numberOfRounds => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  function startNewGameHandler() {
    setIsNumberPicked(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;

  if (isNumberPicked) {
    screen = (
      <GameScreen userNumber={isNumberPicked} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && isNumberPicked) {
    screen = (
      <GameOverScreen
        userNumber={isNumberPicked}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <ImageBackground
      source={require('./assets/images/dicetwo.jpeg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={{opacity: 0.6}}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  );
};

export default App;
