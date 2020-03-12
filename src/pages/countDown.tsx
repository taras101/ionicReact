import React, { useState } from "react";
import { useIonViewDidLeave, useIonViewWillEnter, IonCard } from "@ionic/react";
import "./countDown.css";

const CountDown = () => {
  let targetDate = new Date("Mar 25,2020 01:00:00").getTime();
  let remainingTime = targetDate - new Date().getTime();
  const [cdTime, setcdTime] = useState(
    remainingTime < 0 ? 0 : Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  );
  let intId: any;
  useIonViewWillEnter(() => {
    let intId = setInterval(() => tick(), 10800000);
  });

  useIonViewDidLeave(() => clearInterval(intId));

  const tick = () => {
    console.log(targetDate, new Date().getTime());
    let remainingTime = targetDate - new Date().getTime();

    setcdTime(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  };
  return (
    <IonCard color="dark" class="ion-text-center ion-padding countDown">
      <h1>{cdTime} Days Remaining until Move</h1>
    </IonCard>
  );
};
export default CountDown;
