import React from 'react'
import { Box , Stack ,Typography } from '@mui/material'

import HorizontalBodyPart from '../HorizontalBodyPart'
import Loading from '../Loading'

const SimilarExercises = ({equipmentExercises , targetMuscleExercise}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h3' mb={5}>
        Exercise that the same muscle group.
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {targetMuscleExercise.length ? <HorizontalBodyPart data={targetMuscleExercise}/> : <Loading/>}
      </Stack>

      <Typography variant='h3' mb={5}>
        Exercise that the same equipment.
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {equipmentExercises.length ? <HorizontalBodyPart data={targetMuscleExercise}/> : <Loading/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises