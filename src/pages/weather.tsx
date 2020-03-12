import React, { useCallback, useState } from "react";
import { IonCard } from "@ionic/react";
import "./weather.css";

export const Weather = () => {
  const [current, setCurrent] = useState<any>([]);
  const fetchWeather = useCallback(async () => {
    const ret = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Toronto,Ca&APPID=76d09c646fdb1f4e434984f026a55f43"
    );
    const json1 = await ret.json();
    return json1;
    console.log(json1);
  }, []);
  React.useEffect(() => {
    fetchWeather().then(data => {
      setCurrent(data.main);
      console.log(data);
    });
  }, []);
  const convertTemp = (k: string) => {
    return Math.round(Number(k) - 273);
  };

  return (
    <IonCard class="ion-padding weather">
      <h1>WEATHER</h1>

      <p>
        Current Temperature <span>{convertTemp(current.temp)}</span> Feels Like{" "}
        <span>{convertTemp(current.feels_like)}</span>
      </p>

      <p>
        Todays High <span>{convertTemp(current.temp_max)}</span> Todays Low{" "}
        <span>{convertTemp(current.temp_min)}</span>
      </p>
    </IonCard>
  );
};
export default Weather;
