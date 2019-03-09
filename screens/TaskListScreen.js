import React from 'react';
import { Text, Button, View } from 'react-native';

const TaskList = (taskList) => {
    return (
        taskList.map((userTask)=>{
            userTask.map((task)=> (
                <View>
                    <Text>{task.taskID}</Text>
                    <Text>{task.status}</Text>
                </View>
            ))
        })
    )
}

export default class TaskListScreen extends React.Component {
    state = {
        taskList : [],
    }

    async componentDidMount() {
        const response = await fetch('https://finlit.innovatorymm.com/api/v1/todo/user/a69e42fbb082ec7bc4fc69347b01bfd97e8e')
        const data = await response.json()
        this.setState({
            taskList : data
        })
    }

    render() {
        return (
            <View>
                {this.state.taskList.map((task)=>(
                    <View key={task.id}>
                        <Text>{task.userID}</Text>
                        <Text>{task.taskID}</Text>
                        <Text>{task.status}</Text>
                    </View>
                ))}
            </View>
        )
    }
}