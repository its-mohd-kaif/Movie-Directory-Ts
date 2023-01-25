import React, { useContext, useEffect } from 'react'
import { movieContext } from '../App'

function DisplayCom() {
    let data: any = useContext(movieContext)
    let clone: any = useContext(movieContext)
    useEffect(() => {
        // Sort the movie array
        data.movie.sort((a: any, b: any) => b.duration - a.duration)
        clone.clone.sort((a: any, b: any) => b.duration - a.duration)
        clone.setClone([...clone.clone])
        data.setMovie([...data.movie])
    }, [data.movie.length])

    return (
        <div>
            {data.movie.length !== 0 ?
                data.movie.map((val: any, index: number) => (
                    <div key={index} className="card" style={{ width: "100%", padding: "1em", marginBottom: "3%" }}>
                        <div style={{ borderBottom: "2px solid green" }} className="card-body">
                            <div style={{ float: "left" }}>
                                <h5 className="card-title">{val.movieName}</h5>
                                <p className="card-text">{val.rating}/100</p>
                            </div>
                            <p style={{ float: "right" }} className="card-text" >{val.duration}h</p>
                        </div>
                    </div>
                ))
                : null}
        </div>
    )
}

export default DisplayCom