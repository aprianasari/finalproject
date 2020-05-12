import React from 'react';
import { View, Text } from 'react-native';

const Greeting = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Global</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        position: 'relative',

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15,
    }
}
export default Greeting;