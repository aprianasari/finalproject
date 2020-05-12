import React from 'react';
import { View, Text, Image } from 'react-native';

const TextBody = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Indonesia</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        height: 60,
        position: 'relative',
        marginTop: 20,
        marginBottom: 5
    },
    textStyle: {
        fontSize: 20,
        height: 40,
        fontWeight: 'bold'
    }
}
export default TextBody;