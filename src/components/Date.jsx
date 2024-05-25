import React from "react";
import moment from "moment";

const TodayDate = () => {
  var date = moment();

  var currentDate = date.format("D/MM/YY");

  return (
    <div className="dateComponent today-date">
      <h3 style={{ color: "#9D5A65" }}>Date:{currentDate}</h3>
    </div>
  );
};

export default TodayDate;
