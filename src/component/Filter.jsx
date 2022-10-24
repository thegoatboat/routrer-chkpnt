import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Rating from '@mui/material/Rating';




function Filter({setSearch,setSearchRating}) {


  return (
    <div className='filter-page'>
        
        <InputGroup.Text id="basic-addon1" >Movie search</InputGroup.Text>
        <Form.Control
          placeholder="search by titel..."
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Rating
        name="simple-controlled"
        
        onChange={(event, newValue) => {
          setSearchRating(newValue)
        }}
        />

    </div>
  )
}

export default Filter
