import React, { useState } from "react";
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

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function novaHora() {
    var date = new Date();
    if (date.getHours() > 6 && date.getHours() < 18) {
      return true;
    }
  }

  function handleSignUp() {
    Keyboard.dismiss();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // Signed in
        // var user = userCredential.user;
        // ...

        navigation.navigate("SignIn");
        console.log("Cadastrado com sucesso!😊");
      })
      .catch((error: any) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
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

        <Title>Register-se</Title>

        <Input
          placeholder="Digite seu nome..."
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Digite o email..."
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Digite sua senha."
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleSignUp}>
          <BtnText>Cadastrar</BtnText>
        </Button>

        <ButtonRegister onPress={() => navigation.navigate("SignIn")}>
          <TextRegister>Já possui conta? Faça login</TextRegister>
        </ButtonRegister>
      </Container>
    </TouchableWithoutFeedback>
  );
}
