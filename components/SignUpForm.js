import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Button,
    FormLabel,
    FormInput,
} from 'react-native-elements';

export default class SignUpForm extends React.Component {
    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput />
                </View>
                <Button title="Submit" />
            </View>
        );
    }
}