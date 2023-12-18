/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  if (!campus) {
    return <p>Loading campus data!</p>;
  }
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <img src={campus.imageUrl} alt={campus.name} style={{ width: '500px', height: '300px' }} />
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl}></img>
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <h2>Students</h2>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{name}</h3>
            </Link>             
          </div>
        );
      })}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CampusView;