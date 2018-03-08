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
import axios from 'axios';

import {
    createUser,
    requestOneTimePassword,
} from '../api';

export default class SignUpForm extends React.Component {
    state = {
        phone: '',
    };
    
    setPhone = (phone) => {
        this.setState({ phone });
    }
    
    handleSubmit = async () => {
        const { phone } = this.state;
        
        try {
            await axios.post(createUser, { phone });
            await axios.post(requestOneTimePassword, { phone });
        } catch (e) {
            console.log(e);
        }
    }
    
    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={this.setPhone}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}