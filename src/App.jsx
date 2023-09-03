import './App.css';
import {useState} from "react";
import {puppyList} from "./data";

function App() {
const [puppies, setpuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
console.log(puppies);

const featuredPup = puppies.find((pup) => pup.id === featPupId);
console.log(featuredPup);

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {setFeatPupId(puppy.id);}} key={puppy.id}>{puppy.name}</p>
          })
          }
          
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age} years old</li>
            <li>{featuredPup.email}</li>
            <li>Puppy id: {featuredPup.id}</li>
            <li>Owner id: {featuredPup.ownerId}</li>
          </ul>
        </div>
       )}
        </div>
    </>
  )
}

export default App
