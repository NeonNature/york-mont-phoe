import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class TaskDetailScreen extends React.Component {
    state = {
        todo : {}
    }

    async componentDidMount() {
        const response = await fetch('https://finlit.innovatorymm.com/api/v1/todo/31')
        const data = await response.json()
        this.setState({
            todo : data
        })
        console.log(this.state.todo)
    }

    finishTodo = async () => {
        const response = await fetch('https://finlit.innovatorymm.com/api/v1/todo', {
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({ id : this.state.todo.todo })
        })

        if(response.ok) {
            Alert.alert(
                'Success!',
                'Todo finished successfully!',
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
                <Text>{this.state.todo.name}</Text>
                <Text>{this.state.todo.description}</Text>
                <Text>{this.state.todo.reward}</Text>
                <Button onPress={this.finishTodo} title='Finish' />
            </View>
        )
    }
}