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
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/bench.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/bench_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 1,
    name: 'Picnic Table',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/picnic_table.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/picnic_table_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 2,
    name: 'Parking',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/Parking.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/Parking_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 3,
    name: 'Park',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/park.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/park_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 4,
    name: 'Washroom',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/Washroom.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/Washroom_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 5,
    name: 'Water Fountain',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/WaterFountain.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/WaterFountain_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 6,
    name: 'Information Area',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/Information.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/Information_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
  {
    id: 7,
    name: 'Other',
    icon: (
      <Image
        source={require('../assets/Amenities_PNG/other.png')}
        accessibilityLabel={'icon'}
      />
    ),
    iconSelected: (
      <Image
        source={require('../assets/Amenities_PNG/other_Selected.png')}
        accessibilityLabel={'icon'}
      />
    ),
  },
];

const AmenityView = () => {
  //const [markVisible , setMarkVisible] = useState(false);
  const [markSelected, setMarkSelected] = useState([]);
  // const [rateVisible, setRateVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  // need to fix handlePress
  const handlePress = item => {
    checked ? setChecked(true) : setChecked(false);
    console.log(item.name);
    // eslint-disable-next-line no-shadow
    setMarkSelected(markSelected => [{...markSelected}, item]);
  };
  console.log(markSelected);
  console.log(checked);
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.markTypeContainer}>
            {/* <Icon /> */}
            <Image
              source={require('../assets/Amenity.png')}
              accessibilityLabel={'icon'}
            />
            <Text style={styles.textStyleMain}>Amenity</Text>
            <View>
              <Divider style={styles.divider} />
            </View>
          </View>
          <View style={styles.other}>
            <FlatList
              // style={styles.icons}
              data={data}
              // keyExtractor={(item, index) => item.id}
              numColumns={3}
              renderItem={({item, index}) => (
                <View key={index} style={styles.icon}>
                  <TouchableHighlight
                    disabled={false}
                    onPress={() => handlePress(item)}>
                    {markSelected ? item.icon : item.iconSelected}
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
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 5,
    alignSelf: 'center',
    // width: '100%',
    // height: '100%',
  },
  markTypeContainer: {
    flex: 0.3,
    padding: 20,
    borderColor: 'black',
    borderWidth: 5,
    // alignItems: 'center',
    
  },
  other: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 10,
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
  },
  divider: {
    height: 2,
    alignSelf: 'stretch',
  },
});

export default AmenityView;
