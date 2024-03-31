import {View, Image, Text} from 'react-native';

import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import {styles} from './GameOverScreen.styles';

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Title style={{marginBottom: 16}}>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>X</Text> rounds to
          guess the number <Text style={styles.highlight}>Y</Text>.
        </Text>
      </Title>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
