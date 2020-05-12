import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DataFlexBox extends React.Component {
    constructor() {
        super();
        this.state = {
            summary: [],
            positive: '',
            meninggal: '',
            sembuh: '',
            perawatan: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary');
        const json = await response.json();
        this.setState({ positive: json.confirmed.value })
        this.setState({ perawatan: json.activeCare.value })
        this.setState({ sembuh: json.recovered.value })
        this.setState({ meninggal: json.deaths.value })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.text}> Positif {this.state.positive}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}> Rawat {this.state.perawatan}</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: 10
    },
    box1: {
        flex: 1,
        width: 30,
        height: 70,
        backgroundColor: 'yellow',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    box2: {
        flex: 1,
        width: 90,
        height: 70,
        backgroundColor: 'deepskyblue',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    box3: {
        flex: 1,
        width: 90,
        height: 70,
        backgroundColor: 'lime',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'

    },
    box4: {
        flex: 1,
        width: 90,
        height: 70,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
})


export default DataFlexBox;