import React from 'react';
import { Text, Button, View } from 'react-native';

const TaskList = (taskList) => {
    //console.log(taskList)
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
        console.log(data)
        //const arrdata = Object.values(data)
        /*this.setState({
            taskList : data
        })*/
        //console.log(this.state.taskList)
    }

    render() {
        if(this.state.taskList === []) {
            return (
                <View />
            )
        } else {
            return (
                <View>
                    <Text>Hi</Text>
                </View>
            )
        }
    }
}