import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

import {
    firebaseConfig,
} from './config';

export default class App extends React.Component {
    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SignUpForm />
                
                <SignInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
});
