import React, { Component } from "react";
import uploadImageInput from "../img/upload ikon.png"
import * as Scroll from 'react-scroll';
import { scroller } from 'react-scroll'



scroller = Scroll.scroller;


class UploadInput extends Component {
  constructor(props) {
    super(props);

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      scroller.scrollTo('answer', {
        duration: 10,
        delay: 10,
        smooth: true,
        offset: 10,
      })
      this.props.updateData(img, URL.createObjectURL(img))
    } 
  };

  render() {
    return (
          <div className="uploadImg d-flex">
            <input type="file" name="myImage" accept=".jpg,.jpeg" onChange={this.onImageChange} />
            <label htmlFor="myImage">
              <span className="myimageImg"><img src={uploadImageInput} alt="upload"/></span>
              <span className="myimagetext">Upload image</span>
            </label>
          </div>
    );
  }
}
export default UploadInput;