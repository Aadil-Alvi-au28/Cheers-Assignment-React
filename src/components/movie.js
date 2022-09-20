import React from "react";

const movieBox = (props) => {
    return (
        <div className="container d-flex row justify-content-center m-3">
            {props.movies.map((movie) =>
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={movie.Poster} class="card-img-top" alt="MOVIE" />
                    <div className="card-body">
                        <h5 className="card-title" >Title: {movie.Title}</h5>
                        <p className="card-text">Year: {movie.Year}</p>
                    </div>
                </div>)}
        </div>
    )
};

export default movieBox;