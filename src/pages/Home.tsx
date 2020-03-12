import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import Clock from "./clock";
import Day from "./date";
import CountDown from "./countDown";
import CdForm from "./cdForm";
import Weather from "./weather";

const Home: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Taras' Status</IonTitle>
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

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
