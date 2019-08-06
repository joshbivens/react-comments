import React from 'react';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import './App.css';

const App = () => (
  <div className="comments">
    <h2>Comments</h2>
    <CommentForm />
    <CommentList />
    <footer>
      Vue edition <a target="blank" href="https://codepen.io/joshbivens/pen/pYVBpG">here</a> | &#169; 2019 by <a target="blank" href="https://github.com/joshbivens">Josh Bivens</a>
    </footer>
  </div>
);

export default App;