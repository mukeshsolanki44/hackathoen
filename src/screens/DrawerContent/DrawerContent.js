import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Drawer} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerContent}>


        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
          
            label="Total Track"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />

          <DrawerItem
        
            label="Track By Country"
            onPress={() => {
              props.navigation.navigate('TrackByCountry');
            }}
          />
        </Drawer.Section>
      </View>
   
    </View>
  );
}
