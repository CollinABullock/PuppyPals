import './App.css';
import {useState} from "react";
import {puppyList} from "./data";

function App() {
const [puppies, setpuppies] = useState(puppyList);
console.log(puppies);

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
          }
        </div>
    </>
  )
}

export default App
