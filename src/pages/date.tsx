import React, { useState } from "react";
import { IonCard, useIonViewDidLeave, useIonViewWillEnter } from "@ionic/react";
import "./date.css";

const Day = () => {
  const [day, setDay] = useState(new Date().toLocaleDateString());
  let intId: any;
  useIonViewWillEnter(() => {
    let intId = setInterval(() => tick(), 86400000);
  });

  useIonViewDidLeave(() => clearInterval(intId));

  const tick = () => setDay(new Date().toLocaleDateString());

  return (
    <IonCard color="secondary" class="ion-text-center ion-padding date">
      <h1>{day}</h1>
    </IonCard>
  );
};
export default Day;
