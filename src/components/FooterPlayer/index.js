import React from 'react';
import TrackPlayer from 'react-native-track-player';
import {
  Book,
  ControlButtonContainer,
  ControlButtonImage,
  Cover,
  Info,
  Title,
  Author,
} from './styles';
import playIcon from '../icons/play-icon.png';
import pauseIcon from '../icons/pause-icon.png';

function ControlButton({ icon, onPress }) {
  return (
    <ControlButtonContainer onPress={onPress}>
      <ControlButtonImage source={icon} resizeMode="contain" />
    </ControlButtonContainer>
  );
}

const FooterPlayer = props => {
  const book = props.book;
  const togglePlayback = props.togglePlayback;
  const playbackState = TrackPlayer.usePlaybackState();

  var controlIcon = playIcon;

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    controlIcon = pauseIcon;
  }

  return (
    <Book>
      <Cover source={{ uri: book.thumb_image_url }}></Cover>
      <Info>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
      </Info>
      <ControlButton onPress={togglePlayback} icon={controlIcon} />
    </Book>
  );
};

export default FooterPlayer;
