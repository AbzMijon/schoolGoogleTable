import React from "react";
import axios from 'axios'
import { useEffect } from "react";

function App() {

  useEffect(() => {
      axios.get('https://docs.google.com/spreadsheets/d/1UZxoOstzqK6NPKvEROS2X86R5yyINC8gj9ypGERwphQ/edit?usp=sharing').then(response => {
          console.log(response);
      })
  }, [])

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default App;
