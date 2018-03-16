import React, {Component} from 'react';
import  userDetails from './userList';
import {Route} from 'react-router-dom'

class NewForm extends Component {
    constructor(props){
        super(props)

        let userDefaults={
            firstName: "",
            lastName:"",
            file:"",
            imagePreviewUrl:""
        }
        this.state =userDefaults;

        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleOnChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        var users = JSON.parse(localStorage.getItem("myData") || "[]");
        users.push(this.state);
        localStorage.setItem('myData',JSON.stringify(users));
        console.log(this.props);
        this.props.history.push("/userDetails");  
    }

    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({...this.state,
            file: file,
            imagePreviewUrl: reader.result
          });
        }    
        reader.readAsDataURL(file)
      }

render(){

    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
    <div>
        <form>
            First Name: <input type='text'
               name='firstName'
               onChange = {this.handleOnChange}
               value = {this.state.firstName} />
                <br/>
            Last Name:<input type='text'
               name='lastName'
               onChange = {this.handleOnChange}
               value = {this.state.lastName} />
                <br/>

            Picture: <input className="fileInput" 
                 type="file" 
                 onChange={this.handleImageChange} />

                 <br/>
                 <br/>

            <button className="submitButton" 
                 type="submit" 
                 onClick={this.handleSubmit}>Submit</button>
            </form>  
        <div className="ImagePreview" >
          {imagePreview}
        </div>
        
    </div>
    )
}
}

export default NewForm;