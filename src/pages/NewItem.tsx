import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";
import Clock from "./clock";
import Day from "./date";
import CountDown from "./countDown";
import CdForm from "./cdForm";
import Weather from "./weather";

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark">
        <IonGrid>
          <IonRow>
            <IonCol>
              <Clock />
            </IonCol>
            <IonCol>
              <Day />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <CountDown />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Weather />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <CdForm />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
