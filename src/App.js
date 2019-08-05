import React from 'react';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';
import './App.css';

const App = () => (
  <div>
    <h2>Comments</h2>
    <CommentForm />
    <CommentList />
  </div>
);

export default App;