import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerLogo,
  Logo,
  Title,
  Input,
  Button,
  BtnText,
  ButtonRegister,
  TextRegister,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import firebase from "../../config/firebase";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function novaHora() {
    var date = new Date();
    if (date.getHours() > 6 && date.getHours() < 18) {
      return true;
    }
  }

  function handleSignIn() {
    Keyboard.dismiss();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // Signed in
        // var user = userCredential.user;
        // ...
        navigation.navigate("Clima");
      })
      .catch((error: any) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ContainerLogo>
          <Logo
            source={
              novaHora()
                ? require("../../assets/01d.png")
                : require("../../assets/01n.png")
            }
          />
        </ContainerLogo>

        <Title>Faça o login</Title>

        <Input
          placeholder="Digite o email..."
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Digite sua senha."
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleSignIn}>
          <BtnText>Acessar</BtnText>
        </Button>

        <ButtonRegister onPress={() => navigation.navigate("SignUp")}>
          <TextRegister>Não possui conta? Cadastre-se</TextRegister>
        </ButtonRegister>
      </Container>
    </TouchableWithoutFeedback>
  );
}
