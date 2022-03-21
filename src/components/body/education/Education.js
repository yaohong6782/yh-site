import React from "react";
import "./Education.css";

const Education = () => {
  const EducationList = [
    {
      id: 1,
      school: "University of Wollonggong",
      where: "",
      course: "Computer Science (Cybersecurity)",
      duration: "2020 - 2022",
    },
    {
      id: 2,
      school: "Temasek Polytechnic",
      where: "",
      course: "Diploma in Information Technology",
      duration: "2015 - 2018",
    },
    // {
    //   id: 3,
    //   school: "ITE Central",
    //   where: "",
    //   course: "Games design and Development",
    //   duration: "2012 - 2015",
    // },
  ];

  return (
    <div className="educations">
      <label className="section-title">Educations</label>
      {EducationList.map((item, id) => {
        return (
          <div className="education-wrapper" key={id}>
            <div className="education-schoolcourse">
              <div className="education-school">{item.school}</div>
              <div className="education-course">{item.course}</div>
            </div>
            <div className="education-whereduration">
              <div className="education-where">{item.where}</div>
              <div className="education-duration">{item.duration}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
