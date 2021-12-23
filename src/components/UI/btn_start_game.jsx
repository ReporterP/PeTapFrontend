import React, { Component } from "react";
import uploadImageInput from "../../img/choose one.svg"
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll'



scroller = Scroll.scroller;


class Btn_Game_Start extends Component {
  constructor(props) {
    super(props);

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      scroller.scrollTo('game_answer', {
        duration: 10,
        delay: 10,
        smooth: true,
        offset: 10,
      })
      this.props.uploadData(img, URL.createObjectURL(img))
    } 
  };

  render() {
    return (
          <div className="game_btn_start">
            <input type="file" name="myImage" accept=".jpg,.jpeg" onChange={this.onImageChange} />
            <label htmlFor="myImage">
              <span className="startImg"><img src={uploadImageInput} alt="start" /></span>
            </label>
          </div>
    );
  }
}
export default Btn_Game_Start;
