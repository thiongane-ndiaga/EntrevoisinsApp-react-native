import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, Button, Image} from 'react-native';

const { heigh, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.appTitle}>New neighbour</Text>
      <View style={styles.card}>
        <View>
        <Image 
        source={require('/Users/ndiagsmnt/Desktop/LPTI3-DAR/DevMobileMultiplateforme/Projects/EntrevoisinsApp/contact-logo.png')}
        style={styles.image}
        ></Image>
        </View>
        <TextInput style={styles.input} label="Name" placeholder="Name"/>
        <TextInput style={styles.input} label="Phone number" placeholder="Phone number"/>
        <TextInput style={styles.input} label="Address" placeholder="Address"/>
        <TextInput style={styles.input} label="About Me" placeholder="About Me" 
          multiline="true"/>
        <Button
          title="Save"
          color="#e081a8"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#50aaec',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 30,
    marginTop: 25,
    marginBottom: 5,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width,
  },
  image:{
    resizeMode: "cover",
    height:225,
    width:225,
    tintColor:"#e081a8",
  },
  input: {
    padding: 15,
    margin: 10,
    marginTop: 0,
    borderColor: "#bbb",
    borderRadius:10,
    borderWidth: 1,
    fontSize: 24,
  }
});
