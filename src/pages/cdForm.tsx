import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  useIonViewDidEnter
} from "@ionic/react";
import { getEnabledCategories } from "trace_events";

const CdForm: React.FC = () => {
  let dater = new Date();
  let day = dater.getDate();
  let month = dater.getMonth() + 1;
  let year = dater.getFullYear();
  const [start, setStart] = useState(`${month} ${day} ${year}`);
  let dateElement = document.querySelectorAll("div.datetime-text");
  function handleIonChange(e: any) {
    console.log(e.target.value);
  }

  return (
    <IonCard>
      <IonItem>
        <IonLabel>MM DD YY</IonLabel>
        <IonDatetime
          id="datePicker"
          displayFormat="MM DD YYYY"
          placeholder="Select Date"
          min="2020"
          max="2021"
          value={start}
          onIonChange={(e: any) => {
            setStart(e.target.value);
            console.log(start);
          }}
          pickerOptions={{
            buttons: [
              {
                text: "Update",
                handler: () => {
                  //setStart(dateElement);
                  console.log("Clicked Update!", start, dateElement);
                }
              },
              {
                text: "Cancel",
                handler: () => {
                  console.log("Clicked Cancel.");
                }
              }
            ]
          }}
        ></IonDatetime>
      </IonItem>
    </IonCard>
  );
};
export default CdForm;
