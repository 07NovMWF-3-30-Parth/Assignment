import './App.css';
import img from './images/component.png'

function App() {
  return (
    <div>
      <header id='header'>
        <div className='container'>
          <h1>FED - React : List and Hooks</h1>
          <h4>(Questions and Answers made in React.)</h4>
        </div>
        <br />
        <hr />
      </header>
      <section>
        <div className='container'>
          {/* que-and 1 starts here */}
          <div id='que1'>
            <h2>Explain Life cycle in Class Component and functional component with Hooks</h2>
            <p className='ans'>
              Functional and class components in react differ in syntax and lifecycle management.
              <br />
              Functional component use a function with a return statement to render, class component use 'render()'.
              <br />
              Function components use hooks, class components use React lifecycle methods.
              <br />
              A React component undergoes three different phases in its lifecycle, including mounting, updating, and unmounting.
              <br />
              <blockquote>
                React 16.8 release in 2019 changed everything.
                <br />
                It introduced React hooks.
                <br />
                React hooks are functions that let functional components manage state, handle lifecycle events, and access other React features.
                <br />
                Before hooks, you could only do that using class components.
              </blockquote>
              Functional component - Uses react hooks to handle lifecycle events like useState, useEffect, useMemo.
              <br />
              Class component - Uses class lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
              <img src={img} className='lifecycle' />
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
