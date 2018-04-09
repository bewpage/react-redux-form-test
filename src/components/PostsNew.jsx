import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendNewPost } from "../actions/action_setPosts";
import { Link } from 'react-router-dom';

import './PostsNew.css';


class PostsNew extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            categories: '',
            content: '',
            formErrors: {title:'', categories: '', content: ''},
            titleValid: false,
            categoriesValid: false,
            contentValid: false,
        }
    }

    handlerAnyInputChange = (event, nameInState) => {
        const value = event.target.value;
        this.setState({
            [nameInState]: value,
        },
            () => {this.validateField(nameInState, value)})
    };

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let { titleValid, categoriesValid, contentValid } = this.state;

        switch(fieldName){
            case 'title':
                titleValid = value.length >= 2;
                fieldValidationErrors.title = titleValid ? '' : ' is too short';
                break;
            case 'categories':
                categoriesValid = value.length >= 2;
                fieldValidationErrors.categories = categoriesValid ? '' : ' is too short';
                break;
            case 'content':
                contentValid = value.length >= 2;
                fieldValidationErrors.content = contentValid ? '' : ' is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            titleValid,
            categoriesValid,
            contentValid
        }, this.validateForm);

    }


    validateForm(){
        this.setState({
            formValid: this.state.titleValid && this.state.categoriesValid && this.state.contentValid
        })
    }

    errorClass = (error) => {
        return(error.length === 0 ? '' : 'has-danger');
    };

    newPostSubmit = (event) => {
      event.preventDefault();
      const { title, categories, content } = this.state;
      console.log('title: ', title);
      console.log('categories: ', categories);
      console.log('content: ', content);
      const newPostObject = {
          title,
          categories,
          content
      };

      console.log('dataToServer', newPostObject);
      this.props.sendNewPost(newPostObject);

        this.setState({
            title: '',
            categories: '',
            content: ''
        });
    };

    render(){
        // console.log('props in posts new', this.props);
        // const textInputValidation = validate();
        return(
            <div>
                <h5>New Post</h5>
                <hr/>
                <form onSubmit={this.newPostSubmit}>
                    <div className='form-row'>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.title)} col-md-6`}>
                            <label htmlFor='inputPostTitle1'>Title:</label>
                            <input type="text"
                                   value={this.state.title}
                                   onChange={event => this.handlerAnyInputChange(event, 'title')}
                                   className='form-control form-control-danger'
                                   placeholder='add title'
                            />
                            <div className='form-control-feedback text-danger'>
                                {this.state.formErrors.title}
                            </div>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.title)} col-md-6`}>
                            <label htmlFor='inputPostCategories1'>Categories:</label>
                            <input type="text"
                                   value={this.state.categories}
                                   onChange={event => this.handlerAnyInputChange(event, 'categories')}
                                   className='form-control'
                                   placeholder='add categories'
                            />
                            <div className='form-control-feedback text-danger'>
                                {this.state.formErrors.categories}
                            </div>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.title)} col-md-6`}>
                            <label htmlFor='inputPostTextArea1'>Content:</label>
                            <textarea rows='6'
                                      value={this.state.content}
                                      onChange={event => this.handlerAnyInputChange(event, 'content')}
                                   className='form-control'
                                   placeholder='add content...'
                            ></textarea>
                            <div className='form-control-feedback text-danger'>
                                {this.state.formErrors.content}
                            </div>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='col-md-6'>
                            <button className='btn btn-secondary'
                                    type='submit'
                                    disabled={!this.state.formValid}
                            >
                                Save
                            </button>
                            <Link className='btn btn-danger' to='/'>
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

  return {
      state
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendNewPost
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(PostsNew);