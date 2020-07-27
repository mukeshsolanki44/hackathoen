import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('HomeDrawer'), 1000);
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('./../../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
      </View>
    );
  }
}
