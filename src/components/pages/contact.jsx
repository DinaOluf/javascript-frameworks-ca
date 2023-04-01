import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, TextArea, Button, Error } from "../styles/contact.styles";

const schema = yup
  .object({
    fullName: yup
    .string()
    .min(3, 'Must contain more than 3 characters')
    .required('Please fill in this field')
    .typeError('Please write your full name here'),
    subject: yup
    .string()
    .min(3, 'Must contain more than 3 characters')
    .required('Please fill in this field')
    .typeError('Please write your subject here'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter a valid email address')
      .typeError('Please enter a valid email address'),
    body: yup
      .string()
      .min(3, 'Must contain more than 3 characters')
      .required('Please fill in this field')
      .typeError('Please write your message here'),
  })
  .required();

function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

    return (<main id='contact'>
      <div className='container'>
        <h1 className='contact-heading'>
          Contact Page
        </h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <label htmlFor='fullName'>Full Name</label>
            <Input {...register("fullName")} />
            <Error>{errors.fullName?.message}</Error>
          </div>
          <div>
            <label htmlFor='subject'>Subject</label>
            <Input {...register("subject")} />
            <Error>{errors.subject?.message}</Error>
          </div>
          <div>
            <label htmlFor='email'>E-mail</label>
            <Input {...register("email")} />
            <Error>{errors.email?.message}</Error>
          </div>
          <div>
            <label htmlFor='body'>Message</label>
            <TextArea {...register("body")} />
            <Error>{errors.body?.message}</Error>
          </div>
          <Button className="contact-button" type="submit">Send</Button>
        </form>
      </div>
    </main>);
}

export default ContactPage;