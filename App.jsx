import {ImageBackground} from 'react-native';
import {styles} from './app.styles';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/images/dicetwo.jpeg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={{opacity: 0.7}}>
      <StartGameScreen />
    </ImageBackground>
  );
};

export default App;
