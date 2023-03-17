import React, { useState, useReducer } from 'react';
import fetchBoardGameImg from '../utils/api';
import Loading from './Loading';

// Initiate a reducer
function boardGameReducer(boardGameState, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...boardGameState,
        loading: true,
        imgURLs: null,
        err: null,
      };
    case 'success':
      return {
        ...boardGameState,
        loading: false,
        imgURLs: action.payload,
      };
    case 'error':
      return {
        ...boardGameState,
        loading: false,
        err: action.payload,
      };
    default:
      throw new Err(
        `There is no action type, with name ${action.type} within boardGameReducer`
      );
  }
}

function FetchBoardGame() {
  // Declare the initial state & its setState
  const [input, setInput] = useState('');
  // Declare the initial boardgame state & its dispatch
  const [state, dispatch] = useReducer(boardGameReducer, {
    loading: false,
    imgURLs: null,
    err: null,
  });
  // Destructure boardgame state
  const { loading, imgURLs, err } = state;
  // Declare an update method
  const handleSubmit = () => {
    // When submit button is clicked,
    dispatch({ type: 'loading' });
    fetchBoardGameImg(input)
      .then((imgURLs) => {
        dispatch({ type: 'success', payload: imgURLs });
      })
      .catch((err) => {
        dispatch({ type: 'error', payload: err.message });
      });
  };

  // Render the component
  if (loading) {
    return <Loading />;
  }
  if (err) {
    return <h3>Error during loading game {`${input}`}</h3>;
  }
  return (
    <div className="center">
      <input
        type="text"
        placeholder="Type a board game name"
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Invoke handleSubmit when SUBMIT button is clicked */}
      <button onClick={handleSubmit}>SUBMIT</button>
      {/* Render img if imgURLS has any value */}
      {imgURLs &&
        imgURLs.map((imgURL) => (
          <div className="center">
            <img src={imgURL} />
          </div>
        ))}
    </div>
  );
}

export default FetchBoardGame;
