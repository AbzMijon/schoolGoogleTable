import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

function App() {
  
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
      axios.get('https://docs.google.com/spreadsheets/d/1UZxoOstzqK6NPKvEROS2X86R5yyINC8gj9ypGERwphQ/edit?usp=sharing').then(response => {
          console.log(response);
          setTableData(response.data)
      })
  }, [])

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default App;
