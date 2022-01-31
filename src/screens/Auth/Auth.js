import { View, Text, Button, Alert, Image } from "react-native";
import { styles } from "./Auth.styled";
import * as Google from "expo-google-app-auth";
import { useState } from "react";

export const Auth = (props) => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleGoogleSignin = () => {
    const config = {
      iosClientId: `1036007740692-j3rq4mm4ubg14eu15225ghjhnq81kagi.apps.googleusercontent.com`,
      androidClientId: `1036007740692-lah2j398etji8o9e551hlipbi00jqraa.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          setUserInfo(user);
          setLoginSuccess(true);
        } else {
          alert("google sign in is canceled");
          Alert.alert("google sign in is canceled", [
            { text: "OK", onPress: () => NativeModules.DevSettings.reload() },
          ]);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      {loginSuccess ? (
        <View style={styles.main}>
          <Image
            style={styles.userImage}
            source={{
              uri: userInfo.photoUrl,
            }}
          />
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.email}>{userInfo.email}</Text>

          <Button
            title="Go to App"
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
      ) : (
        <Button title="Sign In with Google" onPress={handleGoogleSignin} />
      )}
    </View>
  );
};
