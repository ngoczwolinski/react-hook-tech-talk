import React, { useState } from 'react';

function Increment() {
  // Declare the initial state & its setState
  const [count, setCount] = useState(0);
  // Declare an update method
  const handleIncrement = () => setCount((count) => count + 1);
  // Render the component
  return (
    <div>
      <button className="increment" onClick={handleIncrement}>
        You clicked me {count} times.
      </button>
    </div>
  );
}

// class Increment extends React.Component {
//   constructor(props) {
//     super(props);
//     // Declare initial state:
//     this.state = { count: 0 };
//     // Bind update methods to the component
//     this.handleIncrement.bind(this);
//   }
//   // Declare the method to update state
//   handleIncrement = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   };
//   // Render the component
//   render() {
//     return (
//       <div>
//         <button className="increment" onClick={this.handleIncrement}>
//           You clicked me {this.state.count} times.
//         </button>
//       </div>
//     );
//   }
// }

export default Increment;
