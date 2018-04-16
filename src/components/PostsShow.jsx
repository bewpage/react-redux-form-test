import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { deletePost } from "../actions/action_fetch-posts";


class PostsShow extends Component{

    postToDelete = (id) => {
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        })
    };

    renderPost(){
        const { post } = this.props;
        // console.log('post to display ', post);
        return isEmpty(post) ? '' : (
            <div className='row'>
                <div className='col-md-8'>
                    <h5 key={post.id}>Title: {post.title} </h5>
                    <p>{post.content}</p>
                </div>
                <div className='col-md-4'>
                    <Link to='/' className='btn btn-secondary'>Back</Link>
                    <div className='btn btn-danger'
                         onClick={() => this.postToDelete(post.id)}
                    >
                        Delete
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderPost()}
            </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
  return{
      post: posts[ownProps.match.params.id]
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deletePost
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);