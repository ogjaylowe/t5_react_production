import './App.css';

import ClassComponent from './Example'
import Functional from './Functional'
import Counter from './Counter'
import Controlled from './Controlled'

const exampleCollection = [
  <ClassComponent key="1" name="results of some API function/fetch combo" />,
  <ClassComponent key="2" name="Meredith" />,
  <ClassComponent key="3" name="Dan" />,
  <ClassComponent key="4" name="Mitchell" />
]


function App() {
  return (
    <div className="App">
      
      <Controlled />

      <Counter startingNumber={100}></Counter>
      <Counter></Counter>
      <Counter></Counter>


      {exampleCollection}

      <Functional name="Jay" />
      <Functional name="Meredith" />
      <Functional name="Dan" />

    </div>
  );
}

export default App;
