import {useState} from 'react'
import OrderedList from './OrderedList'
import UnorderedList from './UnorderedList'
import './App.css'

function App(){
  const [writers, setWriters] = useState([
    "Kafka", "Saramago", "Shakespeare", "Joyce", "Dostoevsky"
  ]);

  const [count, setCount] = useState(0)
  
  return <div className="App">
      <h1>{count}</h1>
      <OrderedList data={writers} />
      <UnorderedList data={writers} />
      <button onClick={() => setCount(count + 1)}>Up</button>
  </div>
}

export default App;