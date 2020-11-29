import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myTechSkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Python",
        "Go",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "NodeJS",
        "Express",
        "Docker",
        "AWS RDS",
        "AWS EC2",
        "AWS EMR",
        "AWS ECS",
        "AWS CloudFormation",
        "Natural Language Processing (NLP)",
        "Git",
      ],
      mySoftSkills: [
        "Team Collaboration",
        "Microsoft Office",
        "G-Suite",
        "Engineering Design",
        "Strategic Planning",
        "Technical Writing",
        "Agile Methodology",
        "Project Management",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <div className="container">
          <div className="item">
            <h1 className="subtopic">Technical Skills</h1>
            <ul>
              {this.state.myTechSkills.map((val) => {
                return <li>{val}</li>;
              })}
            </ul>
          </div>
          <div className="item">
            <h1 className="subtopic">Soft Skills</h1>
            <ul>
              {this.state.mySoftSkills.map((val) => {
                return <li>{val}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
