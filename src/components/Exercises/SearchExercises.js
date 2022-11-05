import { Button, Stack, Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchExercise , exerciseOptions } from '../../utils/fetchData'
import HorizontalBodyPart from './HorizontalBodyPart'

const SearchExercises = ({setExercise , bodyPart ,setBodyPart}) => {
  const [search,setSearch] = useState('')
  const [bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const bodyPartData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setBodyParts(['all', ...bodyPartData]);
    }
    
    fetchExerciseData();
  },[])

  const handleSearch=async()=>{
    if(search){
      const exercisesData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises/',exerciseOptions)

      const searchExercisesFun = exercisesData.filter(
        (exercise)=>exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercise(searchExercisesFun)
    }
  }


  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' bgcolor='#fff'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center' >
        Find Your Exercise Right Here.
      </Typography>
      <Box position ='relative' mb='72px'>
        <TextField
        sx={{
          input:{fontWeight:'700',
                border:'none',
                borderRadius:'4px'},
          width:{lg:'800px',xs:'350px'},
          borderRadius:'40px'
        }}
        height='76px'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />

        <Button className='Search-btn' 
        sx={{
          backgroundColor:'#ff2625', color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},
          height:'56px',position:'absolute',right:'0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      
      <Box sx={{position:'relative',width:'100%' , p:'20px'}}>
        <HorizontalBodyPart data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart
        />
      </Box>

    </Stack>
  )
}

export default SearchExercises