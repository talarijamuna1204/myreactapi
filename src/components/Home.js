import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [response, setResponse] = useState(null);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    Axios.get(`https://api.jikan.moe/v4/anime`, {
      params: {
        page: page,
        letter: title,
      },
    })
      .then(function (response) {
        // handle success
        setResponse(response);
      })
      .catch((error) => console.log(error));
  }, [page, title]);
  const data = response?.data;
  console.log(data);
  return (
    <div className="container">
      <div className="py-4">
        

      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Search your anime....."
      />
      <div className="next-btn" >
        
    {data?.pagination.current_page > 1 && (
      <button
        onClick={() => {
          setPage((prev) => {
            return prev - 1;
          });
        }}
      >
        Previous Page
      </button>
    )}
    <button
      onClick={() => {
        setPage((prev) => {
          return prev + 1;
        });
      }} 
    >
      Next Page
    </button>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>            
              <th scope="col">Anime</th>
              <th scope="col">Title</th>
              <th scope="col">Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {data?.data
              ?.map(({ mal_id, title, rating, images, type}, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td><Link to={`/anime/mal_id=${mal_id}`}>
                      <img
                        src={images.jpg.image_url}
                        alt={images.jpg.image_url}
                        height={"200px"}
                      /></Link>
                    </td>
                    <td>{title}</td>
                    <td>{rating}</td>
                    <td>{type}</td>
                    </tr>
                  
                );
              })} 
          </tbody>          
   
        </table>
    </div>
    </div></div>
  );
};

export default Home;
