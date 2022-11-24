import { TextField ,Stack, Button , Box , Snackbar , Alert ,Typography} from '@mui/material'
import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const [snack, setSnack] = useState(false)
  const [snackbarStatus, setSnackbarStatus] = useState('')
  const [massage, setMassage] = useState('')

    // send email
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(forms.current)

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, forms.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        setSnackbarStatus('success')
        setSnack(true);
        setMassage('Thank for contect me.');
      }, (error) => {
        setSnackbarStatus('error')
        setSnack(true);
        setMassage('Someting error try again later.');
      });
  };

  //snack bar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };

  return (
    <Box bgcolor='#fff'>
      <Typography variant='h2'>Contact Me Here!</Typography>
      <Stack direction={{xs:'colum',sm:'row'}}  justifyContent='flex-start' padding='10px'  sx={{width:'100%'}}>
        <Stack direction='column'  border='1px solid #000'
        sx={{
          '& .MuiTextField-root': { m: 1 },px:{sx:'0',lg:"42px"},
          width:{xs:'90%',lg:'50%'}
        }}
        >

        <form ref={forms}  >

          <TextField className='contact-from' label='Name' fullWidth name='Name' required
          />
                    
          <TextField className='contact-from' label='Phone Number' fullWidth name='number' type='text' inputProps={{ inputMode: 'numeric'}}
          />
          
          <TextField className='contact-from'  label='E-mail' fullWidth name='email' type='email' required
          />
          
          <TextField className='contact-from' label='Message'  fullWidth rows={5} multiline  name='message' required
          />

          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <Button type="submit" variant="outlined" color="primary">
              Let Connect.
            </Button>
          </Box> 

          <Snackbar open={snack} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarStatus} sx={{ width: '100%' }}>
              {massage}
            </Alert>
          </Snackbar>

        </form> 
       </Stack>
     </Stack>
    </Box>
  )
}

export default ContactUs