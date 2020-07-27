import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'white',
  },
  _car_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  _card_1: {
    height: 80,
    elevation: 3,
    backgroundColor: '#71b0e6',
    borderRadius: 3,
    width: '80%',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10

  },
  _card_2: {
    height: 80,
    margin: 10,
    elevation: 3,
    backgroundColor: '#6cb66f',
    borderRadius: 3,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10

  },
  _card_3: {
    height: 80,
    elevation: 3,
    backgroundColor: '#fe1010',
    borderRadius: 3,
    width: '80%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10

  },

  _value: {
    textAlign: 'center',
    color: 'white',
  },
  _cases: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
