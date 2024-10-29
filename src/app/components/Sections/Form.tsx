import React, { useState } from 'react';
import InputField from './InputField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import { ArrowRight, Check, CornerUpRight } from 'react-feather';
import { FormDataProps } from '../types';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataProps>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  
  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setSubmitStatus('loading');
    try {
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!emailResponse.ok) throw new Error('Failed to send email');
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="self-center w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center">
        <InputField
          disabled={submitStatus === 'loading' || submitStatus === 'success'}
          placeholder="Email"
          id="email"
          type="email"
          register={register}
          registerOptions={{ 
            required: 'I promise no spam. Just your email, please!',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Please enter a valid email address.',
            },
            minLength: {
              value: 5,
              message: 'Email should be at least 5 characters long.',
            },
            maxLength: {
              value: 50,
              message: 'Email should not exceed 50 characters.',
            },
          }}
          errors={errors as { [key: string]: { message: string } }}
        />
       
       <motion.button
          type="submit"
          disabled={submitStatus === 'loading' || submitStatus === 'success'}
          className="form-btn"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }} 
        >
         {submitStatus === 'loading' ? (
            <PulseLoader color="black" size={10} />
          ) : (submitStatus === 'success') ? (
            <Check size={30} />
          ) : submitStatus === 'error' ? (
            <CornerUpRight size={30} />
          ) : (
            <ArrowRight size={30} />
          )}
      </motion.button>

      </form>
      <div className='h-[80px]'>
        {submitStatus === 'success' && (
          <p className="form-text">Success, talk to you soon!</p>
        )}
        {submitStatus === 'error' && (
          <p className="form-text text-red-500">Oops! Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
