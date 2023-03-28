import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from "styled-components";

const Input = styled.input`
    height: 1.5rem;
    width: 100%;
    border: solid 1px black;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
`;

const TextArea = styled.textarea`
    height: 1.5rem;
    width: 100%;
    border: solid 1px black;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    min-height: 8rem;
    resize: none;
`;

const Button = styled.button`
    font-family: AmaticSC, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: #5B7A70;
    border: solid 2px white;
    border-radius: 5px;
    font-size: 1.8em;
    padding: 0.2rem 1rem;
    width: 15rem;

    :hover {
    background-color:#000000;
    cursor: pointer;
}
`;

const Error = styled.p`
    color: #8A4343;
`;

const schema = yup
  .object({
    fullName: yup
    .string('Please write your full name here')
    .min(3, 'Must contain more than 3 characters')
    .required('Please fill in this field')
    .typeError('Please write your full name here'),
    subject: yup
    .string('Please write your subject here')
    .min(3, 'Must contain more than 3 characters')
    .required('Please fill in this field')
    .typeError('Please write your subject here'),
    email: yup
      .string('Please enter a valid email address')
      .email('Please enter a valid email address')
      .required('Please enter a valid email address')
      .typeError('Please enter a valid email address'),
    body: yup
      .string('Please write your message here')
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