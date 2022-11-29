import React from 'react'
import { useEffect } from 'react'
import { axios } from 'axios';

function Table() {
    useEffect(() => {
        axios.get('https://docs.google.com/spreadsheets/d/1UZxoOstzqK6NPKvEROS2X86R5yyINC8gj9ypGERwphQ/edit?usp=sharing').then(response => {
            console.log(response);
        })
    }, [])
  return (
    <div>Table</div>
  )
}

export default Table