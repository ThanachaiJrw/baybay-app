import React,{useEffect ,useState} from 'react'
import Pagination from '@mui/material/Pagination';
import { Stack ,Box ,Typography } from '@mui/material'

import {fetchExercise , exerciseOptions} from '../../utils/fetchData'
import ExercisesCard from './ExercisesCard'
import Loading from './Loading';

const ExerciseSetCards = ({exercises , bodyPart , setExercise}) => {
  const [currenPage,setCurrenPage] = useState(1);
  const exercisesPerPage =18

  //Page
  const indexOfLastExercise = currenPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  console.log('exercises =',)
  
  useEffect(()=>{
    const fetchExerciseData = async()=>{
      let exercisesData = [] ;
      
      if (bodyPart === 'all'){
        exercisesData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }else{
        exercisesData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }

      setExercise(exercisesData);
    };
    
    fetchExerciseData();
  }, [bodyPart])

  const paginate =(e, value) =>{
    setCurrenPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  if (!currentExercises.length) return <Loading />;

  return (
    <Box id='exercises'
    sx={{pt:{lg:'110px'}}}
    // mt='50px'
    p='20px'
    bgcolor='#fff'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise,index)=>(
          <ExercisesCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center' >
          {exercises.length > exercisesPerPage && (
            <Pagination
            variant="outlined"
            color='standard'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currenPage}
            onChange={paginate}
            // onChange={(e)=>paginate(e, value)} ในMUI
            size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default ExerciseSetCards