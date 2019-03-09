import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends React.Component {
    state = {
        name : '',
        address : '',
        balance : 0,
    }

    async componentDidMount() {
        const response = await fetch(`https://finlit.innovatorymm.com/api/v1/user/2`)
        const data = await response.json()
        console.log(data)
        this.setState({
            name : data.name,
            address : data.address,
            balance : data.balance,
        })
    }

    render() {
        return (
            <View>
                <Text>Hi</Text>
                <Text>{this.state.name}</Text>
                <Text>{this.state.address}</Text>
                <Text>{this.state.balance}</Text>
            </View>
        )
    }
}