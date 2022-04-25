import { useState, useEffect } from "react";

export const Home = () => {
  const [em, setEm] = useState([]);
  useEffect(() => {
    async function getdata() {
      var data = await fetch("http://localhost:8080/employee");
      var res = await data.json();
      console.log(res, "res");
      setEm(res);
    }
    getdata();
  }, []);

  const [total, setTotal] = useState(10);
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp"> {total}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated"></span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted"></span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
