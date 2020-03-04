import React from 'react'; 
import {View, Text, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import TrackPlayer, {ProgressComponent} from 'react-native-track-player'; 
import Tracker from './Tracker';

export default class CustomPlayer extends React.Component{
  constructor()
  {
      super()
      this.state = { 
          AudioStatus: true,
          isLoadingPlay:false,
          isLoadingPrev:false,
          isLoadingNext:false,
      };
  }

  componentDidMount() {
      TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
          stopWithApp: true,
          compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            //TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
          ],
          capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_PAUSE,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          ],
          notificationCapabilities:[
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            //TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
          ]
          
      });
  }
  togglePlayback = async () => {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      
      if (currentTrack == null) {
        console.log("track is null")
        this.setState({
          AudioStatus: false,
          isLoadingPlay:true
      });
        TrackPlayer.reset();
        await TrackPlayer.add(data);
        TrackPlayer.play();
        this.setState({
          isLoadingPlay:false
        })
      }
      else {
          if(this.state.AudioStatus){
            console.log("play")
              this.setState({
                  AudioStatus: false
              });
              TrackPlayer.play();
          }else{
            console.log('pause')
              this.setState({
                  AudioStatus: true
              });
              TrackPlayer.pause();
          }
        console.log('else...', TrackPlayer.STATE_PLAYING);
      }
    }

    skipToNext = async () => {
      this.setState({
          AudioStatus: false,
          isLoadingPlay:true
      });
      try {
        await TrackPlayer.skipToNext()
      } catch (_) {
        TrackPlayer.reset();
      
      }
      this.setState({
        isLoadingPlay:false
      })
    }

    skipToPrevious = async () => {
      this.setState({
          AudioStatus: false,
          isLoadingPlay:true
      });
      try {
        await TrackPlayer.skipToPrevious()
      } catch (_) {}
      this.setState({
        isLoadingPlay:false
      })
    }
  render(){

    return(
          <View style={{ justifyContent:'space-between', 
          backgroundColor: '#D8D8D8',
          //width:"90%",
          borderColor: 'black',
          borderWidth: 2,
          }}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
          <Tracker/>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.skipToPrevious()} style={{padding: 8}}>
              {this.state.LoadingPrev? <ActivityIndicator size='small' color='white' />:<Image source={{uri: 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Back-Music-icon.png'}} style={{width: 40, height: 30}} resizeMode='contain'/>}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.togglePlayback()} style={{padding: 8}}>
                      {this.state.isLoadingPlay? <ActivityIndicator size='small' color='white' />:<Image source={this.state.AudioStatus ? {uri: 'https://i0.wp.com/icons.iconarchive.com/icons/iconsmind/outline/512/Play-Music-icon.png'} 
                      : {uri: 'http://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/512/pause-icon.png'}} style={{width: 40, height: 30}} resizeMode='contain'/>}
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.skipToNext()} style={{padding: 8}}>
                      {this.state.isLoadingNext? <ActivityIndicator size='small' color='white' />:<Image source={{uri: 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Next-Music-icon.png'}} style={{width: 40, height: 30}} resizeMode='contain'/>}
                      </TouchableOpacity>
          </View>
          </View>
          </View>
      )
      }
      PlayAudio()
  {
      if(this.state.AudioStatus){
          this.setState({
              AudioStatus: false
          });
          TrackPlayer.play();
      }else{
          this.setState({
              AudioStatus: true
          });
          TrackPlayer.pause();
      }
  }
} 
TrackPlayer.registerEventHandler(require('./player-handler.js'));