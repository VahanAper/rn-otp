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
    verifyOneTimePassword,
} from '../api';

export default class SignInForm extends React.Component {
    state = {
        phone: '',
        code: '',
    };
    
    setPhone = (phone) => {
        this.setState({ phone });
    }
    
    setCode = (code) => {
        this.setState({ code });
    }
    
    handleSubmit = async () => {
        const {
            phone,
            code,
        } = this.state;
        
        try {
            await axios.post(verifyOneTimePassword, { phone, code });
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
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={this.setCode}
                    />
                </View>
                
                <Button
                    title="Verify code"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}