import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css'

class CommentList extends React.Component {
	render() {
		return (
			<div>
				<h1>CommentList</h1>
				<Comment />
			</div>
		)
	}
}

export default CommentList;