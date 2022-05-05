import * as React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

function CheckBox({ label, status, onPress }) {

    const [checked, setChecked] = React.useState(false);
    
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 35}}>
            <Checkbox.Android status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked);}} color= "pink"/>
            <Text style={{flex: 1}}>{label}</Text>
        </View>
    );
}

export default CheckBox;