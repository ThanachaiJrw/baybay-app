import { TextField ,Stack, Button , Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';

const ContactUs = () => {

  const MyTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'blue',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
  });

  // send email
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(forms.current)

    // emailjs.sendForm('service_o9su67s', 'template_m5v9qen', forms.current, '1615g0ychu4KM3agU')
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, forms.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Stack direction={{xs:'colum',sm:'row'}}  justifyContent='flex-start' padding='10px' bgcolor='#fff' sx={{width:'100%'}}>
      <Stack direction='column'  border='1px solid #000'
      sx={{
        '& .MuiTextField-root': { m: 1 },px:{sx:'0',lg:"42px"},
        width:{xs:'90%',lg:'50%'}
      }}
      >

        <form ref={forms} onSubmit={sendEmail}>
        
          <Stack columnGap={1} direction={{lg:'row',xs:'column'}} >
            <MyTextField className='contact-from' label='First Name'  fullWidth name='fname' required
           />

            <MyTextField className='contact-from' label='Last Name' fullWidth name='lname' 
            />

          </Stack>
          
          <MyTextField className='contact-from' label='Phone Number' fullWidth name='number' 
          />
          
          <MyTextField className='contact-from'  label='E-mail' fullWidth name='email' required
          />
          
          <MyTextField className='contact-from' label='Message'  fullWidth rows={5} multiline  name='message' required
          />

          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <Button type="submit" variant="outlined" color="primary">
              Let Connect.
            </Button>
          </Box> 

        </form> 
       </Stack>
     </Stack>
  )
}

export default ContactUs