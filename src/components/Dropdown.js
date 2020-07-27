import React, {useState} from 'react';
import {View, Picker, StyleSheet, Dimensions} from 'react-native';
import axios from 'axios';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 'Select Country',
      country:  [
        "Afghanistan",
        "American Samoa",
        "Andorra",
        "Pakistan",
        "India"

      ],
    };
  }


  render() {
    let {selectedValue} = this.state;
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          mode="dropdown"
          
          style={{
            width: screenWidth - 40,
            borderWidth: 1,
            borderColor: 'red',
          }}
          onValueChange={(itemValue, itemIndex) => {
            this.props.select(itemValue);
            this.setState({selectedValue: itemValue});
          }}>
          {this.state.country.map((val, i) => (
            <Picker.Item label={val} value={val} />
          ))}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 40,
    elevation: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
});
