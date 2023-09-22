import { Link } from "react-router-dom";

export function Add(){
    return (
      <div>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
        <h1>Add Recipe </h1>
        <h3>To add a recipe fill out the form below.</h3>
        
      </div>
    )
  }
  export default Add;