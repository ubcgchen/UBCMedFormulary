import * as React from 'react';
import { View, Text } from 'react-native';

function DottedLine() {
    return(
        <View style={{ 
            height: 1, 
            width: '100%', 
            borderRadius: 1, 
            borderWidth: 1, 
            borderColor: 'black', 
            borderStyle: 'dashed', 
            zIndex: 0, 
            marginVertical: 20}}>
            <View style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                height: 1, backgroundColor: 
                'white', zIndex: 
                1 }} />
        </View>
    );
}


export default DottedLine;