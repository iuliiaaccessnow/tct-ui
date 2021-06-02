import React, {useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  FlatList,
} from 'react-native';

const data = [
  {
    id: 0,
    name: 'Terrain',
    iconPath: require('../assets/Places/Terrain.png'),
  },
  {
    id: 1,
    name: 'Amenity',
    iconPath: require('../assets/Places/Amenity.png'),
  },
  {
    id: 2,
    name: 'Access Point',
    iconPath: require('../assets/Places/Access_Point.png'),
  },
  {
    id: 3,
    name: 'Point of Interest',
    iconPath: require('../assets/Places/POI.png'),
  },
  {
    id: 4,
    name: 'Hazard',
    iconPath: require('../assets/Places/Hazard.png'),
  },
  {
    id: 5,
    name: 'Closure',
    iconPath: require('../assets/Places/Closure.png'),
  },
];

const SelectPlaceView = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectPlace, setSelectPlace] = useState('');
  const closePanel = () => {
    console.log('Close Places Panel');
    //dispatch(updateMark(false))
  };
  const handlePress = item => {
    setSelectPlace(item.id);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      // visible={amenityVisible}
      visible={true}
      onRequestClose={closePanel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.other}>
            <FlatList
              contentContainerStyle={styles.listItem}
              data={data}
              // keyExtractor={(item, index) => item.id}
              numColumns={2}
              snapToAlignment={'center'}
              renderItem={({item, index}) => (
                <View key={index} style={styles.icon}>
                  <TouchableHighlight
                    disabled={false}
                    onPress={() => handlePress(item)}>
                    <Image source={item.iconPath} accessibilityLabel={'icon'} />
                  </TouchableHighlight>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              )}
            />
            <View style={styles.closeButton}>
              <TouchableHighlight
                disabled={false}
                onPress={() => console.log('close button is pressed')}>
                <Image
                  source={require('../assets/Utils_Icons/Add_Button.png')}
                  accessibilityLabel={'icon'}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <TouchableHighlight
            disabled={false}
            onPress={() => console.log('close button is pressed')}>
            <Image
              source={require('../assets/Utils_Icons/Upload_Button.png')}
              accessibilityLabel={'icon'}
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          disabled={false}
          onPress={() => console.log('close button is pressed')}>
          <Text style={styles.footerText}>start tracking</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flex: 1,
  },
  other: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 5,
  },
  icon: {
    padding: 15,
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    //resizeMode: "contain",
  },
  closeButton: {
    transform: [{rotate: '45deg'}],
    padding: 15,
    width: 120,
    height: 120,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    // justifyContent: 'space-around',
    flex: 0.2,
  },
  footerIcon: {
    padding: 15,
    width: 120,
    height: 120,
    alignSelf: 'flex-start',
  },
  footerText: {
    color: 'blue',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default SelectPlaceView;
