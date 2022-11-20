import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useHistory } from 'react-router-dom';

const Addreviewer = () => {
  let history = useHistory();
  const [reviewer, setreviewer] = useState({
    fist_name: "",
    last_name: "",
    city: "",
    country: "",
    email: "",
    review: "",
  });

  const { fist_name, last_name, city,country, email, review } = reviewer;
  const onInputChange = e => {
    setreviewer({ ...reviewer, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/reviewers", reviewer);
    history.push("/userlist");
  };
  return (
    <div className="container">
     
    <div className="modal-dialog">
        <div class="modal-content">
            
            <div class="modal-header">
         
        <h4 className="text-center mb-3">Given your opinion about animes</h4>
                <Link type="button" class="btn btn-close" to="/"></Link>
                       
            </div>
            
            <div class="modal-body">
                
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
          <label>First Name</label> <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter first name"
              name="fist_name"
              value={fist_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Last Name</label> <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter last name"
              name="last_name"
              value={last_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>City</label><input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your city"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Country</label> <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your country"
              name="country"
              value={country}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Email Address</label><input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email id"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Review</label><textarea
              rows="4"
              cols="50" 
              className="form-control form-control-lg"
              placeholder="Enter your review"
              name="review"
              value={review}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br/>
          <div class="modal-footer">
          <button className="btn btn-success float-end">Your Opinion </button>          
          <Link className="btn btn-outline-primary float-end"  to="/">Leave</Link>        
          </div>
          </form>
                
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Addreviewer;
