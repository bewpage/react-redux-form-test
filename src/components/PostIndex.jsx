import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestFetchPosts } from '../actions/action_fetch-posts';
import { requestPost } from '../actions/action_fetch-post';

import './PostIndex.css';


class PostIndex extends Component{

    componentDidMount(){
        this.props.requestFetchPosts();
        // console.log('hello-02', this.props);
    }

    renderPosts(){
        const { posts }  = this.props;
        return Object.keys(posts).map((keyName, keyIndex) => {
            const { id, title, categories } = posts[keyName];
           // console.log('test in map', id);
           // console.log('test in map', `${this.props.match.url}post/${id}`);
            return(
                <li key={keyIndex}
                    className='list-group-item'
                >
                    <p>id: {id}</p>
                    <p>
                        title:
                        <Link to={`${this.props.match.url}post/${id}`}
                              onClick={() => this.props.requestPost(id)}
                        >{title}</Link>
                    </p>
                    <p>categories: {categories}</p>
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


export default connect(mapStateToProps, { requestFetchPosts, requestPost })(PostIndex);