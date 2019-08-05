import React from 'react';
import './Comment.css'

const Comment = ({username, comment, time}) => (
	<div className="comment">
		<h4>{username} says</h4>
		<p className="timestamp">{time}</p>
		<p>{comment}</p>
	</div>
);

export default Comment;