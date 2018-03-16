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

      validate(item) {
        let errors = {};
        if (!item.firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!item.lastName) {
            errors.lastName = 'Last Name is required';
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }

render(){

    let  Item  = this.state;
    const { errors, isValid } = this.validate(Item);

    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }


    return (
        <div className="container">
        <form className="form-signin">
        <div className="form-group">
        <h3 className="form-signin-heading">First Name</h3>
             <input type='text'
               name='firstName'
               className='form-control'
               onChange = {this.handleOnChange}
               value = {this.state.firstName} />
               <span className="help-block"></span>
            {!!errors.firstName && <span className="errorMessage">{errors.firstName}</span>}
        </div>
        <div className="form-group">
        <h3 className="form-signin-heading">Last Name</h3>
        <input type='text'
               name='lastName'
               className='form-control'
               onChange = {this.handleOnChange}
               value = {this.state.lastName} />
                <span className="help-block"></span>
            {!!errors.lastName && <span className="errorMessage">{errors.lastName}</span>}
        </div>
        <div className="form-group">

        <h3 className="form-signin-heading">Picture</h3>
        <input className="form-control-file" 
                name='picture'
                 type="file" 
                 onChange={this.handleImageChange} />
            </div>
            <button className="submitButton" 
                 type="submit" 
                 disabled={!isValid}
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