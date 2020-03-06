import React, { useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";
import Tracker from './Tracker';
import playIcon from './icons/play-icon.png';
import pauseIcon from './icons/pause-icon.png';
import previousIcon from './icons/previous-icon.png';
import nextIcon from './icons/next-icon.png';

function ControlButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Image source={icon} style={styles.controlButtonIcon} resizeMode='contain'/>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  icon: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function Player(props) {
  const playbackState = TrackPlayer.usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState("");
  const [trackArtist, setTrackArtist] = useState("");

  TrackPlayer.useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackTitle(track.title);
      setTrackArtist(track.artist);
      setTrackArtwork(track.artwork);
    }
  });

  const { style, onNext, onPrevious, onTogglePlayback } = props;

  var middleButtonIcon = playIcon;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonIcon = pauseIcon;
  }


  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      <Tracker />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton onPress={onPrevious} icon={previousIcon} />
        <ControlButton onPress={onTogglePlayback} icon={middleButtonIcon} />
        <ControlButton onPress={onNext} icon={nextIcon} />
      </View>
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 1,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: 'center'
  },
  controlButtonContainer: {
    padding: 8,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  },
  controlButtonIcon: {
    width: 40, 
    height: 30
  }
});
