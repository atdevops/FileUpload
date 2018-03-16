import React, {Component} from 'react';
import  userDetails from './userList';
import {Route} from 'react-router-dom'
import './App.css';

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
        <div className="container">
        <form>
        <div class="form-group">
            First Name: <input type='text'
               name='firstName'
               className='form-control'
               onChange = {this.handleOnChange}
               value = {this.state.firstName} />
   
            Last Name:<input type='text'
               name='lastName'
               className='form-control'
               onChange = {this.handleOnChange}
               value = {this.state.lastName} />
               

            Picture: <input className="form-control-file" 
                 type="file" 
                 onChange={this.handleImageChange} />
            </div>
            <button className="submitButton" 
                 type="submit" 
                 className="btn btn-primary"
                 onClick={this.handleSubmit}>Submit</button>
            </form>  
        <div className="img-rounded" >
          {imagePreview}
        </div>
        
    </div>
    )
}
}

export default NewForm;