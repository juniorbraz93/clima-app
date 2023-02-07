import React, { useState } from "react";
import {
  Container,
  ContainerHeader,
  ContentHeader,
  HeaderText,
  PhotoProfile,
  Content,
  ContainerTemp,
  Message,
  ImageClim,
  Temp,
  TempCloud,
  NextDays,
  ContainerNextDays,
  ContainerDay,
  Day,
  ImageDay,
  TempDay,
} from "./styles";

interface WeatherProps {
  // name: string;
  description: string | any;
  icon: string;
  temp: number;
  tempMax: number;
  tempMin: number;
}
// import axios from "axios";
// const apikey = "7e174aa4e5645832cb698f589f591508";
// const city = "viana";
// const state = "es";
// const country = "br";

export default function Clima() {
  const [data, setData] = useState<WeatherProps>();

  // axios
  //   .get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apikey}`
  //   )
  //   .then(function (response) {
  //     let result = [];
  //     if (response.data.weather[0].description === "overcast clouds") {
  //       result.push("Nuvens encobertas");
  //     } else {
  //       result.push("Céu limpo");
  //     }
  //     const data: WeatherProps = {
  //       // name: response.data.weather[0].name,
  //       description: result[0],
  //       icon: response.data.weather[0].icon,
  //       temp: response.data.main.temp.toFixed() - 273,
  //       tempMax: response.data.main.temp_min.toFixed() - 273 + 5,
  //       tempMin: response.data.main.temp_max.toFixed() - 273 - 5,
  //     };

  //     setData(data);
  //   });

  console.log(data);

  return (
    <Container>
      <ContainerHeader>
        <ContentHeader>
          <HeaderText>Viana, Es</HeaderText>
          <HeaderText>Dom, 05</HeaderText>
        </ContentHeader>

        <PhotoProfile source={require("../../assets/avatar.png")} />
      </ContainerHeader>

      <Content>
        <ContainerTemp>
          <Message>Bom dia, Junior</Message>

          <ImageClim source={require(`../../assets/04n.png`)} />

          <Temp>{data?.temp ? data?.temp : "28"}ºC</Temp>

          <TempCloud>
            {data?.description ? data?.description : "Nuvens encobertas"}{" "}
            {data?.tempMin ? data?.tempMin : "22"}ºC/
            {data?.tempMax ? data?.tempMax : "33"}ºC
          </TempCloud>
        </ContainerTemp>

        <NextDays>Previsão para o prósimos 7 dias</NextDays>

        <ContainerNextDays
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <ContainerDay>
            <Day>Seg</Day>
            <ImageDay source={require("../../assets/04d.png")} />
            <TempDay>29ºC</TempDay>
          </ContainerDay>

          <ContainerDay>
            <Day>Ter</Day>
            <ImageDay source={require("../../assets/04d.png")} />
            <TempDay>29ºC</TempDay>
          </ContainerDay>

          <ContainerDay>
            <Day>Qua</Day>
            <ImageDay source={require("../../assets/01d.png")} />
            <TempDay>32ºC</TempDay>
          </ContainerDay>

          <ContainerDay>
            <Day>Qui</Day>
            <ImageDay source={require("../../assets/01d.png")} />
            <TempDay>32ºC</TempDay>
          </ContainerDay>

          <ContainerDay>
            <Day>Sex</Day>
            <ImageDay source={require("../../assets/01d.png")} />
            <TempDay>32ºC</TempDay>
          </ContainerDay>

          <ContainerDay>
            <Day>Sab</Day>
            <ImageDay source={require("../../assets/03d.png")} />
            <TempDay>26ºC</TempDay>
          </ContainerDay>
        </ContainerNextDays>
      </Content>
    </Container>
  );
}
