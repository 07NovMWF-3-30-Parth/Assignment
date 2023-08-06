import './App.css';
import CRUD from './CRUD';
import Create from './components/Create';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <div className='container'>
          <h1>FED - React Redux Assignment</h1>
          <h4>(Questions and Answers made in React.)</h4>
        </div>
        <br />
        <hr />
      </header>
      <section>
        <div className='container'>
          {/* que-and 1 starts here */}
          <div id='que1'>
            <h2>1. What is Redux?</h2>
            <p className='ans'>
              <ul>
                <li>
                  Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.
                </li>
                <li>
                  While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.
                </li>
                <li>
                  You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
                </li>
              </ul>
            </p>
          </div>
          {/* que-and 2 starts here */}
          <div id='que2'>
            <h2>2. What is Redux Thunk used for?</h2>
            <p className='ans'>
              Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.
              <br />
              <br />
              One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.
            </p>
          </div>
          {/* que-and 3 starts here */}
          <div id='que3'>
            <h2>3. What is Pure Component? When to use Pure Component over Component?</h2>
            <p className='ans'>
              React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance.
              <br />
              <br />
              A component should be made pure if its render causes a performance issue and the render can be prevented by making the component pure.
            </p>
          </div>
          {/* que-and 4 starts here */}
          <div id='que4'>
            <h2>4. What is the second argument that can optionally be passed tosetState and what is its purpose?</h2>
            <p className='ans'>
              The second argument that can optionally be passed to setState is a callback function which gets called immediately after the setState is completed and the components get re-rendered.
              <br />
              <br />
              The purpose of the second argument that can optionally be passed to setState is a to make updates after the state is changed. This function will get called once the state has been updated, and the callback will receive the updated value of the state.
            </p>
          </div>
          <div id='que5'>
            <h2>5. Create a Table and Search data from table using React Js? </h2>
            <p className='ans'>
              <Table />
              <span>Note : If there is no data in table than add data from below form and refresh the page.</span>
            </p>
          </div>
          <div id='que6'>
            <h2>5. Create Login registration with CRUD Application using API (Redux) </h2>
            <p className='ans'>
              <Create />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;