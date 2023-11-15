import { Box,Button,FilledInput, Stack, TextField} from '@mui/material';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { RESET, getalllocationsuccess } from '../Redux/action';
import LoadingButton from '@mui/lab/LoadingButton';
const Search = () => {
    const [code,setcode]=useState("");
    const {location ,isloading}=useSelector((store)=>store. locationreducer);
    const dispatch=useDispatch();
useEffect(()=>{

},[code])
    const handlesubmit=(e)=>{
        e.preventDefault();
      //  console.log(code);
        dispatch(getalllocationsuccess(code));
    }
 
  return (
    <Box sx={{
        width:"40%",
        m:"auto",
        border:"0px solid red",
        mt:"2rem"
    }}>
        <Box sx={{display:"flex",justifyContent:"center",color:"red",margin:"auto"}}><h1 >Search Pincode</h1></Box>
        <Stack direction={'column'} spacing={2} sx={{
            border:"0px solid green",
            m:"1rem",
        }}>
        <form onSubmit={handlesubmit}>
        <TextField
             
             margin="normal"
             required
             fullWidth
             id="email"
             label="Pincode"
             name="Pincode"
             autoComplete="number"
             autoFocus
             type='number'
            value={code}
             helperText="Please enter any Pincode"
             onChange={(e)=>setcode(e.target.value)}
           />
       <Box sx={{border:"0px solid pink",display:"flex",justifyContent:"center"}}><LoadingButton loading={isloading?true:false} sx={{cursor:"pointer"}} type='submit' variant="contained" >Search</LoadingButton></Box>
        </form>
        <Box sx={{border:"0px solid pink",display:"flex",justifyContent:"center"}}><Button sx={{cursor:"pointer",backgroundColor:'red'}} onClick={()=>{setcode("");dispatch(RESET());}} variant="contained" >Reset</Button></Box>
        </Stack>
        {/* <LoadingButton loading={false} variant="outlined">
  Submit
</LoadingButton> */}
    </Box>
  )
}

export default Search