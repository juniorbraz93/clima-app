import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

const dayTheme = ["#292A4E", "#715C77", "#C75C2E"];
const nigthTheme = ["#0C1119", "#202735", "#232738"];

function novaHora() {
  var date = new Date();
  if (date.getHours() > 6 && date.getHours() < 18) {
    return true;
  }
}

export const Container = styled(LinearGradient).attrs({
  colors: novaHora() ? dayTheme : nigthTheme,
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled(View)`
  width: 229px;
  height: 229px;
  padding: 16px;
  margin: 16px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Image)`
  width: 229px;
  height: 229px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  margin-bottom: 36px;
`;

export const Input = styled(TextInput)`
  width: 328px;
  height: 56px;
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  margin-top: 10px;
  color: #;
`;

export const Button = styled(TouchableOpacity)`
  width: 328px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background: #51a4db;
  border-radius: 16px;
  margin-top: 25px;
`;

export const BtnText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;
`;

export const ButtonRegister = styled(TouchableOpacity)`
  margin-top: 10px;
`;

export const TextRegister = styled(Text)`
  font-size: 12px;
  text-align: center;

  color: #ffffff;
`;
