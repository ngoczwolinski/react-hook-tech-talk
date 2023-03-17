# React Hook

An guide on how to use popular React Hooks

## History of React & the Birth of React Hook

Prior to React, SWE would use Vanilla JS & jQuery to build user interface. This is thanks to Vanilla JS being easy to learn and give SWE full flexibility to custimze the user interface.

In 2013, Meta introduced React, which is exceptationaly good at re-rendering, thanks to its usage of virtual DOM, its ability of batching updates, and its diff algorithm to only rerender affect nodes on the real DOM. However, at the time, stateful component can only be written as class component. This means that all methods update need to be bound to correct components and SWE must stay aware of the usage of the keyword THIS.

In 2016, with the introduction of React Hooks, stateful components can now be written as functional components. In this repo, we will have demo on how to use popular React Hooks, including:

- useState
- useEffect
- useRef
- useContext
- useReducer

## Setup

1. Run `npm install` to install dependecies.
2. Run `npm run dev` to start the demo app
3. Navigate to (http://localhost:5173/)
