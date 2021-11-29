import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation } from "@devexpress/dx-react-chart";
import { API_SERVICE } from "../../../config";
import axios from "axios";

const Reports = () => {
  const [classes, setClasses] = useState([]);
  const getClass = async () => {
    await axios
      .get(`${API_SERVICE}/getclasslist`)
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getClass();
  }, []);

  return (
    <div>
      <Paper>
        <Chart data={classes}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="numberOfStudents" argumentField="name" />
          <Title text="Number Of Students" />
          <Animation />
        </Chart>
      </Paper>
    </div>
  );
};

export default Reports;
