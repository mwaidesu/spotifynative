import { Pressable, StyleSheet, Text, View, ToastAndroid, Button} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


const LoginScreen = () => {

const authenticate = () =>{
    ToastAndroid.show('Reggae sucks!', ToastAndroid.SHORT);
  
}
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          name="spotify"
          size={80}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Millions of songs Free on spotify!
        </Text>

        <View style={{ height: 80 }} />
        <Pressable

        onPress={()=>authenticate()}

        // style={({pressed}) => [
        //   {
        //     backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#1db954',
        //   }

          style={{
            backgroundColor: "#1db954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Sign in with spotify</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginVertical: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderColor:"#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Continue with phone number
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginVertical: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderColor:"#C0C0C0",
            borderWidth: 0.8,
          }}
        >
          <AntDesign name="google" size={24} color="red" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Sign in with Google
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginVertical: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderColor:"#C0C0C0",
            borderWidth:0.8,
          }}
        >
          <FontAwesome name="facebook-official" size={24} color="blue" />
          <Text
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Sign in with Facebook
          </Text>
        </Pressable>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
