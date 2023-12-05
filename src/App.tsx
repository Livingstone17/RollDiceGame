/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix} from "./commons";

// import Diceone from '../assets/One.png'
// import Dicetwo from '../assets./Two.png'
// import Dicethree from '../assets/Three.jpeg'
// import Dicefour from '../assets/Four.jpeg'
// import Dicefive from '../assets/Five.png'
// import Dicesix from '../assets/Six.png'



type DiceProps =PropsWithChildren<{
  imageUrl: string
}>
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Dice =({imageUrl}:DiceProps):JSX.Element => {
 return (
  <View>
    <Image style={styles.diceImage} source={{uri: imageUrl}} resizeMode='contain'/>
    
  </View>
 )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState(DiceOne);
 
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) +1;


    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
        case 2:
          setDiceImage(DiceTwo)
          break;
          case 3:
        setDiceImage(DiceThree)
        break;
        case 4:
        setDiceImage(DiceFour)
        break;
        case 5:
        setDiceImage(DiceFive)
        break;
        case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
      <Text style={styles.rollDiceBtn}>Roll the  Dice</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff2f2'
  },
  diceContainer:{
    margin:12,
  },
  diceImage:{
    width:200,
    height:200,
    },
    rollDiceBtn:{
      marginTop:20,
      paddingVertical:10,
      paddingHorizontal:40,
      borderWidth:2,
      borderRadius:8,
      borderColor:'#e5e0ff',
      fontSize:16,
      color:'#8ea7e9',
      fontWeight:'700',
      textTransform:'uppercase'
    },
 
});

export default App;
