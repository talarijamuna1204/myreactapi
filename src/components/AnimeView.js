import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AnimeView = () => {
    const [data1, setUser] = useState([]); 

    const { mal_id } = useParams();
    useEffect(() => {
      loadUser1();
    }, []);
    const loadUser1 = async () => {
      const res1 = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`);
      setUser(res1.data);
    };
        
          return (
        <div className="container">
        <div className="py-4">
          
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
              <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
                
            {data1.map((view, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{view.title}</td>
                      <td>{view.rating}</td>
                      <td>
                      </td>
                    </tr>
                    
                    ))}
            </tbody>
            
          </table>
            </div>
        </div>
  );
};

export default AnimeView;
