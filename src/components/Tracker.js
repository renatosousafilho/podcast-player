import React from 'react' 
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native' 
import TrackPlayer, {ProgressComponent} from 'react-native-track-player'; 
import Slider from '@react-native-community/slider';

export default class TrackStatus extends TrackPlayer.ProgressComponent { 
    state = { duration: 0, isSeeking: false, age:null } 
    formatTime(seconds) {
        return seconds > 3600 
        ?
            [
            parseInt(seconds / 60 / 60),
            parseInt(seconds / 60 % 60),
            parseInt(seconds % 60)
            ].join(":").replace(/\b(\d)\b/g, "0$1")
        :
            [
            parseInt(seconds / 60 % 60),
            parseInt(seconds % 60)
            ].join(":").replace(/\b(\d)\b/g, "0$1")
    }

    render () {
    TrackPlayer.getDuration().then(duration=>this.setState({duration}))
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.currentPosition}>
                { this.state.isSeeking ? this.formatTime(this.seek) : this.formatTime(this.state.position) }
                </Text> 
                <Slider 
                minimumValue          = {0}
                maximumValue          = {this.state.duration}
                //thumbTintColor        = "white"
                //minimumTrackTintColor = "#000"
                //maximumTrackTintColor = "rgba(255,255,255,.8)"
                step                  = {1}
                onValueChange ={ val=>{
                    TrackPlayer.pause();
                    this.seek = val;
                    this.setState({isSeeking:true})
                }}
                onSlidingComplete={ val=>{
                    this.setState({isSeeking: false },()=> {
                    if(this.seek!= null){
                    TrackPlayer.seekTo(this.seek);
                    this.position = this.seek;
                    TrackPlayer.play();
                    //this.setState({isSeeking:false})
                    }
                    })
                }}
                value={this.state.isSeeking ? this.seek : this.state.position}
                style={styles.slider}
                />
            <Text style={styles.duration}>{this.formatTime(this.state.duration)}</Text> 
            </View>
        </View>
    )
    }
} 

const styles = StyleSheet.create({
    container: {
        flexDirection:'row'
    },
    slider: {
        width: '80%',
        backgroundColor: '#FFFFFF'
    },
    currentPosition: {
        color: 'black',
        backgroundColor:'transparent',
        textAlign:'center',
        width:40,
        fontSize:12,
        paddingTop:12
    },
    duration: {
        paddingTop: 12,
        fontSize: 12,
    }
});

TrackPlayer.registerEventHandler(require('./player-handler'));