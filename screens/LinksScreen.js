import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
              <Icon
                name="qrcode"
                color="#c0392b"
                size={200}
                type="material-community"
              />
              <Text style={styles.name}>
                The Legendary John Doe and his Duck
              </Text>
          </View>
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
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
      paddingTop: 15,
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
  },
  parenttitle: {
      color: 'red'
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
