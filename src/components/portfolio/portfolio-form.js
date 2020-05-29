import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";


export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "eCommerce",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
      editMode: false,
      // apiUrl: "https://trenthendrickson.devcamp.space/portfolio/portfolio_items",
      apiUrl: "http://localhost:5000/api/v1/portfolio",
      apiAction: 'post',
      logo_url: '',
      logo_id: '',
      thumb_image_url: '',
      thumb_image_id: '',
      banner_image_url: '',
      banner_image_id: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);
    this.deleteImage = this.deleteImage.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();


}

deleteImage(imageType) {
  console.log(imageType)
  axios.delete(
    // `http://localhost:5000/api/v1/portfolio/<id>`,
    `http://localhost:5000/api/v1/portfolio/${this.state.id}?image_type=${imageType}`,)
    // I DELETED WITHCREDENTIALS:TRUE
    .then(response => {
    this.setState({
      [`${imageType}_url`]: ""
    })
  })
  .catch(error => {
    console.log("deleteImage error", error)
  })
}
// deleteImage(imageType) {
//   console.log(imageType)
//   axios.delete(
//     `https://api.devcamp.space/portfolio/delete-portfolio-image/${this.state.id}?image_type=${imageType}`, 
//     { withCredentials: true }
//   ).then(response => {
//     this.setState({
//       [`${imageType}_url`]: ""
//     })
//   })
//   .catch(error => {
//     console.log("deleteImage error", error)
//   })
// }

componentDidUpdate() {
  if (Object.keys(this.props.portfolioToEdit).length > 0) {
    const {
      id,
      name,
      description,
      category,
      position,
      url,
      thumb_image_url,
      banner_image_url,
      logo_url
    } = this.props.portfolioToEdit;

    this.props.clearPortfolioToEdit();

    this.setState({
      id: id, 
      name: name || "",
      description: description || "",
      category: category || "eCommerce",
      position: position || "",
      url: url || "",
      editMode: true,
      // apiUrl: `https://trenthendrickson.devcamp.space/portfolio/portfolio_items/${id}`,
      apiUrl: `http://localhost:5000/api/v1/portfolio/${id}`,
      // apiUrl: `http://localhost:5000/api/v1/portfolio/<id>`,
      apiAction: 'patch',
      thumb_image_url: thumb_image_url || "",
      banner_image_url: banner_image_url || "",
      logo_url: logo_url || ""
    })
  }
}

handleThumbDrop() {
    return {
        addedfile: file => this.setState({ thumb_image: file })
    };
}

handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    };
}

handleLogoDrop() {
    return {
        addedfile: file => this.setState({ logo: file })
    };
}

componentConfig() {
    return {
        iconFiletypes: [".jpg", ".png"],
        showFiletypeIcon: true,
        postUrl: "https://httpbin.org/post"
    };
}

djsConfig() {
    return {
        addRemoveLinks: true,
      maxFiles: 1
    };
}

  handleChange(event) {
      this.setState({
      [event.target.name]: event.target.value
    });
  }

handleSubmit(event) { 
  console.log('works')
  logoFormData = new FormData()
  logoFormData.append('file', logo)
  logoFormData.append('upload_preset', 'portfolio-items')

  thumbFormData = new FormData()
  thumbFormData.append('file', thumb)
  thumbFormData.append('upload_preset', 'Thumb-items')

  bannerFormData = new FormData()
  bannerFormData.append('file', banner)
  bannerFormData.append('upload_preset', 'portfolio-items')
  // const logoFormData = new FormData();
  // logoFormData.append('file', this.state.logo)
  // logoFormData.append('upload_preset', 'portfolio-items')
  // const thumbFormData = new FormData();
  // thumbFormData.append('file', this.state.thumb_image)
  // thumbFormData.append('upload_preset', 'portfolio-items')
  // const bannerFormData = new FormData();
  // bannerFormData.append('file', this.state.banner_image)
  // bannerFormData.append('upload_preset', 'portfolio-items')

  try {
    // const logoCloudinary = await axios(
    const logoCloudinary = axios(
      {
        method: "post",
        url: 'https://api.cloudinary.com/v1_1/tahimagecloud/image/upload',
        data: logoFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    )
    // const thumbCloudinary = await axios(
    const thumbCloudinary = axios(
      {
        method: "post",
        url: 'https://api.cloudinary.com/v1_1/tahimagecloud/image/upload',
        data: thumbFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    )
    // const bannerCloudinary = await axios(
    const bannerCloudinary = axios(
      {
        method: "post",
        url: 'https://api.cloudinary.com/v1_1/tahimagecloud/image/upload',
        data: bannerFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    )
    // const flaskDatabase = await axios(
    const flaskDatabase = axios(
      {
        method: "post",
        url: 'http://localhost:5000/api/v1/portfolio',
        data: {
          name: this.state.name,
          description: this.state.description,
          category: this.state.category,
          position: this.state.position,
          url: this.state.url,
          logo_url: logoCloudinary.data.secure_url,
          logo_public_id: logoCloudinary.data.public_id,
          thumb_image_url: thumbCloudinary.data.secure_url,
          thumb_image_public_id: thumbCloudinary.data.public_id,
          banner_image_url: bannerCloudinary.data.secure_url,
          banner_image_public_id: bannerCloudinary.data.public_id,
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )



    // let thumb_image_url
    // let thumb_image_id
    // let banner_image_url
    // let banner_image_id
    // let logo_url
    // let logo_id

    // axios.all([logoCloudinary, thumbCloudinary, bannerCloudinary]).then(axios.spread((...responses) => {
    //   const logoCloudinaryResponse = responses[0]
    //   const thumbCloudinaryResponse = responses[1]
    //   const bannerCloudinaryResponse = responses[2]
    //   console.log(logoCloudinaryResponse)
    //   console.log(thumbCloudinaryResponse)
    //   console.log(bannerCloudinaryResponse)
    //   thumb_image_url = thumbCloudinary.data.secure_url,
    //   thumb_image_id = thumbCloudinary.data.public_id,
    //   banner_image_url = bannerCloudinary.data.secure_url,
    //   banner_image_id = bannerCloudinary.data.public_id,
    //   logo_url = logoCloudinary.data.secure_url,
    //   logo_id = logoCloudinary.data.public_id
    // }))
    // .then(res => {
    //   console.log(res)
    //   axios(
    //     {
    //       method: "post",
    //       url: 'http://localhost:5000/api/v1/portfolio',
    //       data: {
    //         name: this.state.name,
    //         description: this.state.description,
    //         category: this.state.category,
    //         position: this.state.position,
    //         url: this.state.url,
    //         thumb_image_url: thumb_image_url,
    //         thumb_image_id: thumb_image_id,
    //         banner_image_url: banner_image_url,
    //         banner_image_id: banner_image_id,
    //         logo_url: logo_url,
    //         logo_id: logo_id
    //       },
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   )
    //   .then(res => {
    //     console.log('wow it worked')
    //   })
    // })
  } catch (err) {
    console.log(err)
  }
  event.preventDefault();
}







render() {
    return (
        <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
          <div className="two-column">
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
              />

            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
              />
          </div>

          <div className="two-column">
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
              />

            <select
              className="select-element"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              >
              <option value="eCommerce">eCommerce</option>
              <option value="Scheduling">Scheduling</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className="one-column">
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
              />
          </div>

          {/* <div className="image-uploaders three-columns">  */}
          <div className="image-uploaders">
            {/* {true ? "do if true" : "do if false"} this is a basic ternary */}

            {this.state.thumb_image_url && this.state.editMode ? (
              <div className="portfolio-manager-image-wrapper">
                <img src={this.state.thumb_image_url} />

                <div className="image-removal-link">
                  <a onClick={() => this.deleteImage("thumb_image")}>
                    Remove File
                  </a>
                </div>
              </div>
             ) : (
            <DropzoneComponent
            ref={this.thumbRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleThumbDrop()}
            >
              <div className="dz-message">Thumnail</div>
              </DropzoneComponent>
            )}
          
            {this.state.banner_image_url && this.state.editMode ? (
              <div className="portfolio-manager-image-wrapper">
                <img src={this.state.banner_image_url} />
                <div className="image-removal-link">
                  <a onClick={() => this.deleteImage("banner_image")}>
                    Remove File
                  </a>
                </div>
              </div>
             ) : (
            <DropzoneComponent
            ref={this.bannerRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleBannerDrop()}
            >
              <div className="dz-message">Banner</div>
              </DropzoneComponent>
            )}

            {this.state.logo_url && this.state.editMode ? (
              <div className="portfolio-manager-image-wrapper">
                <img src={this.state.logo_url} />
                <div className="image-removal-link">
                  <a onClick={() => this.deleteImage("logo")}>
                    Remove File
                  </a>
                </div>
              </div>
             ) : (
            <DropzoneComponent
            ref={this.logoRef}
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleLogoDrop()}
            >
              <div className="dz-message">Logo</div>
              </DropzoneComponent>
            )}

          </div>

          <div>
            <button className="btn" type="submit">
                Save
            </button>
          </div>
        </form>
    );
  }
}
