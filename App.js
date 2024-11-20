import React from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, StatusBar, Image} from "react-native";

const database = [
  {data: [
      {name:"Aesop Carl", type:"Support", image:require('./img/Embalmer.webp')},
      {name:"Eli Clark", type:"Support", image:require('./img/Seer.webp')}
    ],
    title:"Survivors", bgColor:"darkblue"},

  {data: [
      {name:"WuChang", type:"Attack", image:require('./img/Wu_Chang.webp')},
      {name:"Opera Singer", type:"Attack", image:require('./img/OperaSinger.webp')},
      {name:"Photographer", type:"Attack", image:require('./img/Joseph.webp')}
    ],
    title:"Hunters", bgColor:"maroon"}
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"lightgrey",
    paddingTop: 40,
    paddingBottom: 40
  },

  headerText: {
    color: 'white',
    fontSize:25,
    fontWeight: 'bold',
    textAlign:'center',
    padding:5
  },

  sections: {
    flex: 1,
    padding: 3,
    flexDirection: 'column',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },

  box: {
    backgroundColor: 'white',
    marginHorizontal:10,
    marginVertical:10,
    padding:4,
    flexDirection: 'column',
    alignItems: 'center'
  },

  items: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    color: 'Black',
    fontSize:20,
    fontWeight: 'bold',
    marginTop:5,
    textAlign:'center'
  },

  image: {
    width: '50%',
    height:200,
    borderRadius: 10,
    resizeMode:'contain',
  },

  type: {
    fontSize:15,
    color:'Black',
    textAlign:'center'
  },
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity>
        <View style={styles.box}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </View>
          <Image source={item.image} style={styles.image} />
        </View>
      </TouchableOpacity>
  )
}

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList
            sections={database}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgColor}}) => (
                <View style={[styles.sections, {backgroundColor: bgColor}]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

export default App;
