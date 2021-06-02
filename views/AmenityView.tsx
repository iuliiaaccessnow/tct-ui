import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  FlatList,
} from 'react-native';
import {Divider} from 'react-native-elements';

// import {Colors} from './styles/colors';
// import {batch, useDispatch, useSelector} from 'react-redux';
const data = [
  {
    id: 0,
    name: 'Bench',
    iconPath: require('../assets/Amenities_PNG/bench.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/bench_Selected.png'),
  },
  {
    id: 1,
    name: 'Picnic Table',
    iconPath: require('../assets/Amenities_PNG/picnic_table.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/picnic_table_Selected.png'),
  },
  {
    id: 2,
    name: 'Parking',
    iconPath: require('../assets/Amenities_PNG/Parking.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/Parking_Selected.png'),
  },
  {
    id: 3,
    name: 'Park',
    iconPath: require('../assets/Amenities_PNG/park.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/park_Selected.png'),
  },
  {
    id: 4,
    name: 'Washroom',
    iconPath: require('../assets/Amenities_PNG/Washroom.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/Washroom_Selected.png'),
  },
  {
    id: 5,
    name: 'Water Fountain',
    iconPath: require('../assets/Amenities_PNG/WaterFountain.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/WaterFountain_Selected.png'),
  },
  {
    id: 6,
    name: 'Information Area',
    iconPath: require('../assets/Amenities_PNG/Information.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/Information_Selected.png'),
  },
  {
    id: 7,
    name: 'Other',
    iconPath: require('../assets/Amenities_PNG/other.png'),
    iconSelectedPath: require('../assets/Amenities_PNG/other_Selected.png'),
  },
];

// const AmenityView = (amenityVisible: boolean) => {
const AmenityView = () => {
  // console.log('amenityVisible: ' + amenityVisible);
  //const [markVisible , setMarkVisible] = useState(false);
  const [markSelected, setMarkSelected] = useState([]);
  // const [rateVisible, setRateVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  // need to fix handlePress
  const handlePress = item => {
    checked ? setChecked(true) : setChecked(false);
    console.log(item.name);
    setMarkSelected(item.id);
  };
  console.log(markSelected);
  console.log(checked);

  const closePanel = () => {
    console.log('Close Amenities Panel');
    //dispatch(updateMark(false))
  };

  const getIconSource = item => {
    return markSelected === item.id ? item.iconSelectedPath : item.iconPath;
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
          <View style={styles.markTypeContainer}>
            {/* <Icon /> */}
            <Image
              source={require('../assets/Places/Amenity.png')}
              accessibilityLabel={'icon'}
            />
            <Text style={styles.textStyleMain}>Amenity</Text>
            <Divider style={styles.divider} />
          </View>
          <View style={styles.other}>
            <FlatList
              contentContainerStyle={styles.listItem}
              //style={styles.icons}
              data={data}
              // keyExtractor={(item, index) => item.id}
              numColumns={3}
              snapToAlignment={'center'}
              renderItem={({item, index}) => (
                <View key={index} style={styles.icon}>
                  <TouchableHighlight
                    disabled={false}
                    onPress={() => handlePress(item)}>
                    <Image
                      source={getIconSource(item)}
                      accessibilityLabel={'icon'}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    padding: 30,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  markTypeContainer: {
    flex: 0.15,
    padding: 10,
    alignItems: 'center',
  },
  other: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    padding: 15,
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  textStyleMain: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    //resizeMode: "contain",
  },
  divider: {
    height: 2,
    alignSelf: 'stretch',
  },
});

export default AmenityView;
