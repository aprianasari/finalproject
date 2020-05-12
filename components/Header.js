import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = (props) => {
    const { textStyle } = styles;
    return (
        <Text style={textStyle}>Data Covid-19 Global & Indonesia</Text>
    );
};


const styles = {
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
}
export default Header;