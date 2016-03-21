/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, { PropTypes } from 'react-native';
import Facebook from '../Auth/Facebook';
const {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

const Splash = () =>
  <View style={styles.container}>
    <Image
        source={require('../../Images/background3.jpg')}
        style={styles.backgroundImage}
    >
      <View style={styles.imagesContainer}>
        <Text style={styles.welcome}>
          SalsApp
        </Text>
        <Text style={styles.instructions}>
          lorem ipsum dolor sit PARTY!
        </Text>
        <Facebook/>
      </View>
    </Image>
  </View>

Splash.propTypes = {
  instructions: PropTypes.string,
}

Splash.defaultProps = {
  instructions: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Splash