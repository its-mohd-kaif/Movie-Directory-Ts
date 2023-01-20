import React, { useContext, useEffect, useState } from 'react'
import { movieContext } from '../App';

function SearchCom() {
    // UseState For Search Field
    const [input, setInput] = useState<string>("");
    // Movie Data Context 
    let data: any = useContext(movieContext);
    // Clone Movie Data
    let clone: any = useContext(movieContext)
    // Flag State
    const [flag, setFlag] = useState(false)
    let tempArr: any = []
    useEffect(() => {
        if (input.length === 0 && flag === true) {
            data.setMovie(clone.clone)
            setFlag(false)
        }
    }, [clone.clone, data, flag, input])
    // Search Handler
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let temp = e.target.value.toUpperCase()
        setInput(e.target.value);
        if (temp.length >= 2) {
            // Check Validation
            if (clone.clone.length === 0) {
                alert("Add Some Movies !!")
            } else {
                //    Search Data
                for (let i = 0; i < clone.clone.length; i++) {
                    if (clone.clone[i].movieName.startsWith(temp) === true) {
                        tempArr.push(clone.clone[i]);
                        setFlag(true)
                    }
                }
                data.setMovie(tempArr)
            }

        }
    }

    return (
        <div>
            <div className="input-group mb-3">
                <input onChange={searchHandler} type="text" className="form-control" placeholder="Search Movies..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
        </div>
    )
}

export default SearchCom