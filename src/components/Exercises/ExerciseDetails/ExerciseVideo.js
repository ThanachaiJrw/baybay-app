import React from 'react'
import { Box , Stack , Typography } from '@mui/material'
import Loading from '../Loading'

const ExerciseVideo = ({exercisesVideos , name}) => {

    if(!exercisesVideos.length) return <Loading/>

  return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
        <Typography marginBottom='33px' variant='h4'>
            Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise video
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' 
        sx={{
            flexDirection:{lg:'row'},
            gap:{lg:'110px',xs:'0'}
        }}
        >
            {exercisesVideos?.slice(0,3)?.map((item,index)=>(
                <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank'
                rel='roreferrer'>
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box justifyContent='center'>
                        <Typography variant='h5' color='#000'>
                            {item.video.title}
                        </Typography>
                        <Typography variant='h6' color='#000'>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideo