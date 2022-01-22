import React from "react";

const Work = () => {

    const ExpList = [
        {
            id:1,
            exp:"Onwards Media Group Pte Ltd",
            department:"Freeboh",
            role:"Intern Software Developer"
        },
        {
            id:2,
            exp:"Student Project liased with Changi Airport Group",
            department:"",
            role:"Software Developer"
        }
    ]
    return (
    <div>
      {/* css styling to be done  */}
      <h2>Onwards Media Group</h2>
      <p>Software developer Intern</p>
      <h2>Changi Airport Group</h2>
      <p>Student project liased with CAG</p>
    </div>
  );
};

export default Work;
