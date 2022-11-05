import React from 'react'
import { Skeleton , Stack } from '@mui/material'

const Loading = () => {
  return (
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
        </Stack>
  )
}

export default Loading