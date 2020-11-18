import { Component } from 'react';
import 'font-awesome/css/font-awesome.css';


class Tile extends Component {

state={
  play:false
}

audio = new Audio(this.props.sound);

stopPlay=()=>{
  this.audio.pause();
  this.audio.currentTime=0;
}

PlaySign = <i class="fa fa-play" aria-hidden="true"></i>;

PauseSign = <i class="fa fa-pause" aria-hidden="true"></i>;


toggleplay = () => {
  this.setState({play: !this.state.play},
    ()=>{this.state.play ? this.audio.play(): this.stopPlay() });
}
      


  render(){
    const SPN = this.props.sound;

      const soundName= SPN.substring(
        SPN.lastIndexOf('/') + 1,
        SPN.lastIndexOf('.') - 9
      )
    return (
    <div className="tile">
      <button
         className="btn btn-primary m-2"
    onClick={this.toggleplay}>{this.state.play ?  this.PauseSign : this.PlaySign} {soundName}</button>
        
    </div>
  );
}
  
}

export default Tile;