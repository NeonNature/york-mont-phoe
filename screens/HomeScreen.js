import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Icon, Input, Card } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    role: '',
  };


  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
              <Icon
                name="donut-small"
                color="#c0392b"
                size={200}
              />
          </View>
          <Button 
              title="Get Started"
              raised={true} 
              onPress={() => console.log('Pressed')} />
          <Card>
              <Input
                  type='outlined'
                  placeholder='Name'
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
              />
              <View style={styles.choose}>
                  <Button 
                      buttonStyle={styles.parent}
                      titleStyle={styles.parenttitle}
                      title="Get Started"
                      onPress={() => console.log('Pressed')}
                      raised={true}
                  />
                  <Button 
                      style={styles.child}
                      title="Get Started"
                      onPress={() => console.log('Pressed')}
                      raised={true}
                  />
              </View>
              <Button 
              title="Get Started"
              raised={true} 
              onPress={() => console.log('Pressed')} />
          </Card>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parenttitle: {
      color: 'red'
  },
  parent: {
      backgroundColor: '#fff'
  },
  child: {

  },
  choose: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30
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
