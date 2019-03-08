import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Button, Icon, Input, Card, ListItem } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    role: '',
    list: [
      {
        title: 'Study Duckopedia',
        icon: 'book'
      },
      {
        title: 'Feed the Duck',
        icon: 'pets'
      },
    ]
  };

  


  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Card 
          title="Lists-in-progress"
          titleStyle={styles.text}
          >
          {
            this.state.list.map((item, i) => (
              <ListItem
              topDivider
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              badge={{ value: 'John Doe' }}
              onPress={() => console.log('Pressed')}
            />
                  ))
          }
          </Card>
          <Button 
              title="Add a task"
              raised={true} 
              onPress={() => console.log('Pressed')} />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  }
});
