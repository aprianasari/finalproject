import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Global extends React.Component {
    constructor() {
        super();
        this.state = {
            api: [],
            positive: '',
            sembuh: '',
            meninggal: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({ positive: json.confirmed.value })
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
                    <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
                </View>
                <View style={styles.box3}>
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
    },
    box1: {
        flex: 1,
        width: 70,
        height: 80,
        backgroundColor: 'yellow',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center',
    },
    box2: {
        flex: 1,
        width: 70,
        height: 80,
        backgroundColor: 'lime',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    box3: {
        flex: 1,
        width: 70,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
})


export default Global;