import React, { Component } from 'react';
import withRequest from './withRequest';

class Post extends Component {
    render() {
        const { data } = this.props;
        if (!data) return null;
        return (
            <div>
                { JSON.stringify(this.props.data) }
            </div>
        );
    }
}

const PostWithData = withRequest('https://jsonplaceholder.typicode.com/posts/1')(Post)
export default PostWithData;