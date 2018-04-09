import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestFetchPosts } from '../actions/action_fetch-posts'
// import { isEmpty } from 'lodash';

import './PostIndex.css';


class PostIndex extends Component{

    componentDidMount(){
        this.props.requestFetchPosts();
        console.log('hello-02', this.props);

    }

    renderPosts(){
        const posts = this.props.posts;
        return Object.keys(posts).map((keyName, keyIndex) => {
            const { id, title, categories, content } = posts[keyName];
           // console.log('test in map', id);
           // console.log('test in map', title);
            return(
                <li key={keyIndex}
                    className='list-group-item'
                >
                    <div className='remove-post'>
                        <i className='remove-post-icon city-name-remove-icon fas fa-trash-alt'></i>
                    </div>
                    <p>id: {id}</p>
                    <p>title: {title}</p>
                    <p>categories: {categories}</p>
                    <p>content: {content}</p>
                </li>
            )
        });
    }


    render(){
        // console.log('this.props', this.props);
        return(
            <div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Posts</h3>
                        <ul className='list-group'>
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { posts } = state;
    return {
        posts
    }
};
//
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         requestFetchPosts
//     }, dispatch)
// };


export default connect(mapStateToProps, { requestFetchPosts })(PostIndex);