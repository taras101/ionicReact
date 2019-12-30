import React, { useState } from "react";
import {
  IonItem,
  useIonViewDidLeave,
  useIonViewWillEnter,
  IonCard
} from "@ionic/react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  let intId: any;
  useIonViewWillEnter(() => {
    let intId = setInterval(() => tick(), 1000);
  });

  useIonViewDidLeave(() => clearInterval(intId));

  const tick = () => setTime(new Date().toLocaleTimeString());

  return (
    <IonCard color="dark" class="ion-text-center ion-padding clock">
      <h1>{time}</h1>
    </IonCard>
  );
};
export default Clock;
