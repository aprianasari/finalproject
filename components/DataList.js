import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, RecyclerViewBackedScrollView } from 'react-native';


class DataList extends Component {
  constructor() {
    super();
    this.state = {
      DataIndo: [],
      refreshing: false
    }
  }
  renderItem = ({ item }) =>
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.box1}><Text>{item.provinsi}</Text></View>
        <View style={styles.box2}><Text>{item.kasusPosi}</Text></View>
        <View style={styles.box3}><Text>{item.kasusSemb}</Text></View>
        <View style={styles.box4}><Text>{item.kasusMeni}</Text></View>
      </View>
    </SafeAreaView>


  onRefresh = () => {
    this.getDataApi();
  }

  componentDidMount = () => {
    this.getDataApi();
  }

  getDataApi = async () => {
    const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    const DataIndo = await response.json()
    const { data } = await DataIndo
    this.setState({
      DataIndo: {
        Data: await data,
      }
    })
  }

  render() {
    if (!this.state.DataIndo) {
      return <Text>Loading...</Text>
    }
    return (
      <View>
        <FlatList
          data={this.state.DataIndo.Data}
          keyExtractor={item => item.fid.toString()}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />
      </View>

    )
  }
};
export default DataList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 50,
    fontFamily: 'sans-serif-light'
  },
  box1: {
    width: 140,
    marginBottom: 7,
    height: 20
  },
  box2: {
    width: 60,
    height: 20,
    alignSelf: 'center',
    marginBottom: 7,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    borderRadius: 20,
    textAlign: 'center',

  },
  box3: {
    width: 60,
    height: 20,
    alignSelf: 'center',
    marginLeft: 30,
    marginBottom: 7,
    marginHorizontal: 10,
    backgroundColor: 'lime',
    borderRadius: 20,
    textAlign: 'center'
  },
  box4: {
    width: 60,
    height: 20,
    alignSelf: 'center',
    marginLeft: 40,
    marginBottom: 7,
    marginHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    textAlign: 'center'
  },

  name: {
    fontSize: 10,
    fontWeight: 'bold',
    color: "black",
    alignSelf: 'center',
  },
})

