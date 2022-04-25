import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
  const [employ, setEmploy] = useState([]);
  useEffect(() => {
    async function getdata() {
      var data = await fetch("http://localhost:8080/employee");
      var res = await data.json();
      console.log(res, "res");
      setEmploy(res);
    }
    getdata();
  }, []);
  console.log("employee", employ);
  function eventhand() {}
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employ.map((data) => (
        <Link to="/login">
          <div key={data.id} onClick={eventhand} className="employee_card">
            <img className="employee_image" src={data.image} />
            <span className="employee_name">{data.employee_name}</span>
            <span className="employee_title">{data.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
