import React from 'react';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import './App.css';

const App = () => (
  <div>
    <h2>Comments</h2>
    <CommentForm />
    <CommentList />
  </div>
);

export default App;