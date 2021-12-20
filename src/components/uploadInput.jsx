import React, { Component } from "react";
import uploadImageInput from "../img/uploadpage/upload ikon.png"

class UploadInput  extends Component {
  constructor(props) {
    super(props);

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.props.updateData(URL.createObjectURL(img))
    } 
  };

  render() {
    return (
          <div className="uploadImg d-flex">
            <input type="file" name="myImage" onChange={this.onImageChange} />
            <label htmlFor="myImage">
              <span className="myimageImg"><img src={uploadImageInput} alt="upload"/></span>
              <span className="myimagetext">Upload image</span>
            </label>
          </div>
    );
  }
}
export default UploadInput;