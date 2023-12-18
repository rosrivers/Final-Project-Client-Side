/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import React from "react";
import "";
import { Link } from "@material-ui/core";

const HomePageView = (props) => {
  // Render Home page view
  return (
      <div className = "container" style = {{ display: "flex", justifyContent: "space-between"}}>
        <div className = "campuses" style = {{
          backgroundColor: "white",
          paddingLeft: 75,
          paddingRight: 75,
          paddingBottom: 75,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
      }}>
      <h1>Home Page</h1>

      <h2 style={{marginBottom: 20}}><strong>View Campuses!</strong></h2>
      <Link to={'/campuses'}
        style = {{
          width: 128,
          height: 36,
          alignSelf: 'center',
          marginBottom: 32,
        }}
        >
        <button      
          style={{
            width: 128,
            height: 36,
            alignSelf: "center",
            marginBottom: 32,
            backgroundColor: "purple",
          }}
        >
          Click!
          </button>
        </Link>
        <img
          src = "https://content.manhattan.edu/admissions/1.jpg"
          alt = "campus"
          style = {{width: 500}}></img>
        </div>
        <div className="students" style={{
           backgroundColor: "white",
           paddingLeft: 75,
           paddingRight: 75,
           paddingBottom: 75,
           display: "flex",
           flexDirection: "column",
        }}>
        <h2>View Students !</h2>
        <Link to={'/students'}
        style = {{
          width: 128,
          height: 36,
          alignSelf: 'center',
          marginBottom: 32,
        }}
        >
        <button      
          style={{
            width: 128,
            height: 36,
            alignSelf: "center",
            marginBottom: 32,
            backgroundColor: "purple",
          }}
        >
          Click!
        </button>
        </Link>
        <img
          src = "https://s39613.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg"
          alt = "students"
        style={{width: 500}} ></img>
      </div>
    </div>
  );    
}

export default HomePageView;