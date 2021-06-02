/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AmenityView from './views/AmenityView';
import SelectPlaceView from './views/SelectPlaceView';
const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      {/* <AmenityView /> */}
      <SelectPlaceView />
    </View>
  );
};

export default App;
