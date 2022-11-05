import { TextField ,Stack, Button , Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

// const { YOUR_SERVICE_ID , YOUR_TEMPLATE_ID , YOUR_PUBLIC_KEY} = process.env

const ContactUs2 = () => {

  const MyTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& input:valid + fieldset': {
        borderColor: 'purple',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      },
    },
  });

// validation

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = async (data) => {
  console.log(data);
  sendEmail(data);
};


  // send email
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, forms.current, process.env.YOUR_PUBLIC_KEY)
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

        <form ref={forms} onSubmit={handleSubmit(onSubmit)}>
        
          <Stack item columnGap={1} direction={{lg:'row',xs:'column'}} >
            <MyTextField className='contact-from' label='First Name'  fullWidth name='fname' 
            {...register('fname',{
              required:'Name is Required'
            })}
            error={!!errors?.fname} 
            helperText={errors?.fname ? errors?.fname.message : null}
            />

            <MyTextField className='contact-from' label='Last Name' fullWidth name='lname' 
            {...register('lname')} 
            />

          </Stack>
          
          <MyTextField className='contact-from' item label='Phone Number' fullWidth name='number'  
          {...register('number')}
          />
          
          <MyTextField className='contact-from'  item label='E-mail' fullWidth name='email'
          {...register('email',{
            required:'E-mail is Required',
            pattern:{
              value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:'Invalid E-mail Address.'
              }
          })} 
          error={!!errors?.email} 
          helperText={errors?.email ? errors.email.message : null}
          />
          
          <MyTextField className='contact-from' item label='Message'  fullWidth rows={5} multiline  name='message'
          {...register('massage',{required:'Please entering your massage.'})}
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

export default ContactUs2