

import { createContext, useState } from 'react';
import './App.css';
import DisplayCom from './Components/DisplayCom';
import Form from './Components/Form';
import SearchCom from './Components/SearchCom';
// Define Type
type FormType = {
  movieName: string;
  rating: string;
  duration: string;
  sort: string
}[]
// Conext
export const movieContext = createContext({});

function App() {
  // Movie Data State
  const [movie, setMovie] = useState<FormType | []>([]);
  // Clone Movie Data State For Search 
  const [clone, setClone] = useState<FormType | []>([]);
  return (
    <div >
      <movieContext.Provider value={{ movie, setMovie, clone, setClone }}>
        <div className='row'>
          <center>
            <h1>Movie Hub</h1>
            <br></br>
          </center>
          <div className='column1'>
            <Form />
          </div>
          <div className='column2'>
            <div>
              <SearchCom />
            </div>
            <div>
              <DisplayCom />
            </div>
          </div>
        </div>
      </movieContext.Provider>

    </div>
  );
}

export default App;
