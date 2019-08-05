import React from 'react';
import Comment from '../Comment/Comment';
import { database } from '../../config/constants';
import './CommentList.css'

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }
  componentWillMount() { // [2]
    const db = database.ref('comments');
    const MAX_COUNT = 9;
    db.on('value', (snapshot) => {
      if (snapshot.numChildren() > MAX_COUNT) {
        let childCount = 0;
        let updates = {};
        snapshot.forEach((child) => {
          if (++childCount < snapshot.numChildren() - MAX_COUNT) {
            updates[child.key] = null;
          }
        });
        db.update(updates);
      }
    });
  }
  componentDidMount() {
    const db = database.ref('comments');
    
    db.on('value', (snapshot) => {
      const comments = snapshot.val();
      const arr = [];
      for(const comment in comments) {
        arr.push({
          username: comments[comment].username,
          comment: comments[comment].comment,
          time: comments[comment].time,
        })
      };
      
      this.setState({
        comments: arr.reverse()
      });
    })
  }
  render() {
    return (
      <div className="comments-list">
        {
          this.state.comments.map(comment => (
            <Comment
              username={comment.username}
              comment={comment.comment}
              time={comment.time}
            />                          
          ))
        }
      </div>
    )
  }
}

export default CommentList;