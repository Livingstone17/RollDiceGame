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

// import {Diceone,Dicetwo,Dicethree,Dicefour,Dicefive,Dicesix} from "../assets/index";

import Diceone from '../assets/dice-1.jpeg'
import Dicetwo from '../assets/dice-2.png'
import Dicethree from '../assets/dice-3.jpeg'
import Dicefour from '../assets/dice-4.jpeg'
import Dicefive from '../assets/dice-5.png'
import Dicesix from '../assets/dice-6.png'



type DiceProps =PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Dice =({imageUrl}:DiceProps):JSX.Element => {
 return (
  <View>
    <Image style={styles.diceImage} source={imageUrl} resizeMode='contain'/>
    
  </View>
 )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Diceone);
 
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) +1;


    switch (randomNumber) {
      case 1:
        setDiceImage(Diceone)
        break;
        case 2:
          setDiceImage(Dicetwo)
          break;
          case 3:
        setDiceImage(Dicethree)
        break;
        case 4:
        setDiceImage(Dicefour)
        break;
        case 5:
        setDiceImage(Dicefive)
        break;
        case 6:
        setDiceImage(Dicesix)
        break;
    
      default:
        setDiceImage(Diceone)
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
