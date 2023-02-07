import axios from "axios";
import { createContext, ReactNode, useState } from "react";
const apikey = "7e174aa4e5645832cb698f589f591508";
const city = "viana";
const state = "es";
const country = "br";

interface ApiContextProps {
  data: WeatherProps | undefined;
}

interface WeatherProps {
  // name: string;
  description: string | any;
  icon: string;
  temp: number;
  tempMax: number;
  tempMin: number;
}

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextApi = createContext({} as ApiContextProps);

export function ContextProvider({ children }: ContextProviderProps) {
  const [data, setData] = useState<WeatherProps>();

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apikey}`
    )
    .then(function (response) {
      let result = [];
      if (response.data.weather[0].description === "overcast clouds") {
        result.push("nuvens encobertas");
      } else {
        result.push("céu limpo");
      }
      const data: WeatherProps = {
        // name: response.data.weather[0].name,
        description: result[0],
        icon: response.data.weather[0].icon,
        temp: response.data.main.temp.toFixed() - 273,
        tempMax: response.data.main.temp_min.toFixed() - 273 + 5,
        tempMin: response.data.main.temp_max.toFixed() - 273 - 5,
      };

      setData(data);
    });

  return (
    <ContextApi.Provider
      value={{
        data,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
