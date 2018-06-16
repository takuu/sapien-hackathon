import React from "react";
import { StyleSheet, Text, View, ScrollView, NavigatorIOS } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea
} from "victory-native";

import ViewContainer from "./components/ViewContainer";
import MealScore from "./components/MealScore";
import Weight from "./components/Weight";
import Steps from "./components/Steps";
import AddMeal from "./components/AddMeal";
import Bottom from "./components/Bottom";
import AgoraRtcEngine from "./components/AgoraRtcEngineModule";
import AgoraRendererView from "./components/AgoraRendererView";

export default class App extends React.Component {
  // Agora Action
  _joinChannel() {
    AgoraRtcEngine.setLocalVideoView(
      this._localView,
      AgoraRtcEngine.AgoraVideoRenderModeFit
    );
    AgoraRtcEngine.setVideoProfile(
      AgoraRtcEngine.AgoraVideoProfileDEFAULT,
      false
    );
    AgoraRtcEngine.startPreview();
    AgoraRtcEngine.joinChannel(
      null,
      "rnchannel01",
      "React Native for Agora RTC SDK",
      0
    );
  }

  _leaveChannel() {
    AgoraRtcEngine.stopPreview();
    AgoraRtcEngine.leaveChannel();
  }

  _switchCamera() {
    AgoraRtcEngine.switchCamera();
  }

  _switchAudio() {
    AgoraRtcEngine.setEnableSpeakerphone(isSpeakerPhone);
    isSpeakerPhone = !isSpeakerPhone;
  }

  render() {
    AgoraRtcEngine.createEngine("2def8f3b492c4b74a73eb592c4ea039e");
    AgoraRtcEngine.enableVideo();
    AgoraRtcEngine.enableAudio();
    AgoraRtcEngine.setVideoProfileDetail(360, 640, 15, 300);
    AgoraRtcEngine.setChannelProfile(
      AgoraRtcEngine.AgoraChannelProfileCommunication
    );
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: "Sapien Health"
        }}
        barTintColor="#065ba7"
        titleTextColor="#fff"
        style={{ flex: 1 }}
      />
    );
  }
}
// 23
class MyScene extends React.Component {
  state = { mealTotal: 21 };
  onAddMeal = num => {
    this.setState({
      mealTotal: this.state.mealTotal + num
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <AgoraRendererView
          ref={component => (this._localView = component)}
          style={{ width: 360, height: 240 }}
        />

        <AgoraRendererView
          ref={component => (this._remoteView = component)}
          style={{ width: 360, height: 240 }}
        />
        <ScrollView>
          <MealScore score={this.state.mealTotal} />
          <Weight />
          <Steps />
          <AddMeal onAddMeal={this.onAddMeal} />
          <Bottom onJoin={this._joinChannel} onLeave={this._leaveChannel} />
        </ScrollView>
      </View>
    );
  }

  // Aogra CallBack
  remoteDidJoineChannelNoti = agoraKitEmitter.addListener(
    "RemoteDidJoinedChannel",
    notify => {
      AgoraRtcEngine.setRemoteVideoView(
        this._remoteView,
        notify.uid,
        AgoraRtcEngine.AgoraVideoRenderModeFit
      );
    }
  );

  componentWillUnmount() {
    remoteDidJoineChannelNoti.remove();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // marginTop: "23%",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});
