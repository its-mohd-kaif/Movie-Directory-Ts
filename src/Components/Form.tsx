import React, { useContext, useRef } from 'react'
import { movieContext } from '../App';

function Form() {
  // UseContext of movie
  let data: any = useContext(movieContext)
  // UseContext of clone
  let clone: any = useContext(movieContext)
  // Input Fileds Ref
  const movieName = useRef<HTMLInputElement>(null!);
  const rating = useRef<HTMLInputElement>(null!);
  const duration = useRef<HTMLInputElement>(null!);
  // Add Movie In The List
  const addHandler = () => {
    // Regex for check user input for movie hour
    let regex = /^[0-9]?.?[0-9]hr$/i
    // Check Validation
    if (movieName.current.value === "" && null !== movieName.current) {
      alert("Movie Field Can Not Be Blank...");
      movieName.current.focus();
    } else if (rating.current.value === "" && null !== rating.current) {
      alert("Rating Field Can Not Be Blank...")
      rating.current.focus();
    } else if (Number(rating.current.value) > 100 || Number(rating.current.value) < 0) {
      alert("Fill Rating Between [0-100] !!");
      rating.current.focus();
    } else if (duration.current.value === "" && null !== duration.current) {
      alert("Duration Field Can Not Be Blank...")
      duration.current.focus();
    } else if (duration.current.value !== "" && null !== duration.current) {
      if (regex.test(duration.current.value) === false) {
        alert("Please Specify Time in hour : Ex 1.5hr")
      } else {
        alert("Successfully Add")
        // Add Object Into Context State
        let obj = {
          sort: Number(duration.current.value.slice(0, -2)),
          movieName: movieName.current.value.toUpperCase(),
          rating: Number(rating.current.value),
          duration: duration.current.value
        }
        data.setMovie([...data.movie, obj])
        clone.setClone([...clone.clone, obj])
        movieName.current.value = ""
        rating.current.value = ""
        duration.current.value = ""
      }
    }
  }
  return (
    <div>
      <center>
        <div style={{ width: "60%" }}>
          <form>
            <div className="input-group mb-3">
              <input ref={movieName} type="text" className="form-control" placeholder="Enter Movie Name..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">Movie Name</span>
            </div>
            <div className="input-group mb-3">
              <input ref={rating} type="number" className="form-control" placeholder="Enter Ratings On A Scale 1 to 100..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">Ratings</span>
            </div>
            <div className="input-group mb-3">
              <input ref={duration} type="text" className="form-control" placeholder="Enter Duration in hr..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">Duration</span>
            </div>
            <div className="d-grid gap-2">
              <button onClick={addHandler} style={{ background: "green" }} className="btn btn-primary" type="button">ADD MOVIE</button>
            </div>
          </form>
        </div>
      </center>
    </div>
  )
}

export default Form