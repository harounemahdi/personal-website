import React, { Component } from "react";

import WideCard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education</h1>

        <WideCard
          title="Capital One Development Academy"
          where="Capital One"
          from="February, 2020"
          to="August, 2020"
        />
        <WideCard
          title="Bachelor's in Chemical Engineering"
          where="The Ohio State University"
          from="August, 2015"
          to="December, 2019"
        />
        <WideCard
          title="Highschool Diploma"
          where="Dublin Coffman High School"
          from="August, 2011"
          to="May, 2015"
        />
      </div>
    );
  }
}

export default Education;
