import { Text, View, Image, ScrollView } from "react-native";
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
`;

export const ContainerHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 28px;
  height: 40px;
  width: 92%;
  margin-left: 16px;
`;

export const ContentHeader = styled(View)``;

export const HeaderText = styled(Text)`
  color: rgba(255, 255, 255, 0.6);
`;

export const PhotoProfile = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Content = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const ContainerTemp = styled(View)`
  width: 243px;
  height: 406px;
  margin-top: 20px;
  align-items: center;
`;

export const Message = styled(Text)`
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

export const ImageClim = styled(Image)`
  width: 200px;
  height: 200px;
  margin-top: 16px;
`;

export const Temp = styled(Text)`
  font-weight: 300;
  font-size: 104px;
  line-height: 127px;
  text-align: center;
  color: #fff;
  opacity: 0.85;
  margin-top: 4px;
`;

export const TempCloud = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

export const NextDays = styled(Text)`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.85);
`;

export const ContainerNextDays = styled(ScrollView)`
  height: 129px;
  margin: 14px;
`;

export const ContainerDay = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
  gap: 4px;
  margin-left: 16px;

  width: 99px;
  height: 129px;

  background: rgba(255, 255, 255, 0.23);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Day = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: rgba(0, 0, 0, 0.8);
`;

export const ImageDay = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const TempDay = styled(Text)`
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  color: rgba(0, 0, 0, 0.8);
`;
