import React from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';

export default class RegisterScreen extends React.Component {
    state = {
        name : '',
        type : '',
    }

    handleName = (name) => {
        this.setState({
            name : name
        })
    }

    handleType = (type) => {
        this.setState({
            type : type
        })
    }

    register = async () => {
        console.log(JSON.stringify(this.state))
        const response = await fetch('https://finlit.innovatorymm.com/api/v1/user', {
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(this.state),
        })
    
        if (response.ok) {
            Alert.alert(
                'Success!',
                'Your account is created successfully!',
                [
                    {text : 'OK', style : 'default'}
                ]
            )
        } else {
            Alert.alert(
                'Error!',
                'Something went wrong :(',
                [
                    {text : 'OK', style : 'cancel'}
                ]
            )
        }
    }

    render() {
        return (
            <View>
                <Text>Name</Text>
                <TextInput onChangeText={this.handleName} value={this.state.name}/>
                <Text>Type</Text>
                <TextInput onChangeText={this.handleType} value={this.state.type} />

                <Button onPress={this.register} title='Register' />
            </View>
        )
    }
}