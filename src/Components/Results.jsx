import React, { useEffect } from 'react'
import { Box,Button, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import Locationcard from './Locationcard';
const Results = () => {
    const {isloading,issuccess,locations,iserror}=useSelector(store=>store.locationreducer);
//console.log(Object.keys(locations).length);

  return (
    <Box sx={{marginTop:"4rem",border:"0px solid green"}}>
        <Box>
        <Box sx={{display:"flex",justifyContent:"center",color:"green",margin:"auto"}}><h1 >Places</h1></Box>
        <Box sx={{backgroundColor:"orange",borderRadius:"2rem",fontSize:{xs:"0.7rem",sm:"1.5rem",md:"2rem",lg:"2rem",xl:"2rem"},gap:'1rem'}}>
        {Object.keys(locations).length>0?locations.places.map((el,i)=>(
    
    <Locationcard key={i} datakey={i} data={el} country={locations.country}/>
    
))
:
<Box sx={{height:"200px",width:"100%",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBytBl9azUgKlU5Z_2jsd1jOLeiF0cCg0DPA&usqp=CAU')",backgroundSize:"30%",backgroundPosition:"center"}}></Box>
}
</Box>
        </Box>
    </Box>
  )
}

export default Results