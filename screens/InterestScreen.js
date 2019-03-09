import React from 'react';
import { TextInput, Text, Button, View } from 'react-native';

export default class InterestScreen extends React.Component {
    state = {
        interestRecord : {},
        interests : [],
    }

    async componentDidMount() {
        const response = await fetch('http://finlit.innovatorymm.com/api/v1/interest/2/details')
        const data = await response.json()
        this.setState({
            interests : data
        })

        const response1 = await fetch('http://finlit.innovatorymm.com/api/v1/interest/a69e42fbb082ec7bc4fc69347b01bfd97e8e')
        const data1 = await response1.json()
        this.setState({
            interestRecord : data1
        })
        console.log(this.state)
    }

    render() {
        return (
            <View>
                {this.state.interests.map((interest)=>(
                    <View key={interest.id}>
                        <Text>{interest.amount}</Text>
                        <Text>{interest.interest}</Text>
                        <Text>{interest.total}</Text>
                    </View>
                ))}
            </View>
        )
    }
}