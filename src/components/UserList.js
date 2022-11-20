import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';



const UserList = () => {
  const [reviewers, setUser] = useState([]);

	let imgSrc = "";
  const  getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials =
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
};

const createImageFromInitials = (size, name, color) => {
    if (name == null) return;
    name=getInitials(name)
    size=60;

    const canvas=document.createElement('canvas')
    const context=canvas.getContext('2d')
    canvas.width=canvas.height=size

    context.fillStyle="#ffffff"
    context.fillRect(0,0,size,size)

    context.fillStyle=`${color}50`
    context.fillRect(0,0,size,size)

    context.fillStyle=color;
    context.textBaseline='middle'
    context.textAlign='center'
    context.font =`${size/2}px Roboto`
    context.fillText(name,(size/2),(size/2))

    return canvas.toDataURL()
};

useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/reviewers");
    setUser(result.data);
  };

  return (

  
    <div className="container">
      <div className="py-4">
        
        <h4>Best opinion about animes</h4>
        <div className="">

        <table class="table border shadow">
          
          <tbody>{ reviewers.map((user, index) => (
                  <tr>
                    <td>
<img
				id='preview'
				src={
					imgSrc.length <= 0
						? createImageFromInitials(500,(user.fist_name), getRandomColor())
						: imgSrc
				}
				alt='profile-pic'/>
                  </td>
                    <td>{user.fist_name} {user.last_name}</td>
                   
                    <td>   <p className="comment">{user.review}</p>                 </td>
                    <td><ThumbUp/> <ThumbDown/> </td>
          
                  </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UserList;
