import { Box, Stack } from '@mui/material'
import React from 'react'

const Locationcard = ({data,country,datakey}) => {
   // console.log(data);
  return (
    <Stack sx={{paddingLeft:"2rem",paddingRight:"0.5rem" }} display="grid" gridTemplateColumns="repeat(4,5% 25% 25% 38%)"  >
        <Box >{datakey+1}.</Box>
    <Box>Country : {country}</Box>
    <Box>State : {data.state}</Box>
    <Box>Place Name : {data['place name']}</Box>
   </Stack>
  )
}

export default Locationcard