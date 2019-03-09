import  React from 'react';
import { View, Button, Text } from 'react-native';

export default class HistoryScreen extends React.Component {
    state = {
        transactions : []
    }

    async componentDidMount() {
        const response = await fetch('https://finlit.innovatorymm.com/api/v1/transaction/user/a69e42fbb082ec7bc4fc69347b01bfd97e8e')
        const data = await response.json()
        this.setState({
            transactions : data
        })
    }

    render() {
        return (
            <View>
                {this.state.transactions.map((trx) => (
                    <View key={trx.id}>
                        <Text>{trx.amount}</Text>
                        <Text>{trx.to}</Text>
                        <Text>{trx.from}</Text>
                        <Text>{trx.type}</Text>
                    </View>
                ))}
            </View>
        )
    }
}