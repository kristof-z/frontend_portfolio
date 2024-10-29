"use client"
import { useEffect, useState } from 'react';
import { InputFieldProps } from '../types';

const InputField = ({ id, type, register, placeholder, registerOptions = {}, errors }: InputFieldProps) => {
  const [, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '');
  };

  useEffect(() => {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    if (inputElement && inputElement.value !== '') {
      setHasValue(true);
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      <input
        {...register(id, registerOptions)}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className='border border-gray-400 rounded-2xl px-5 leading-3xl py-10 text-5xl bg-white/20 focus:bg-white/20 focus:outline-none'
      />
      <div className='h-[50px]'>{errors?.[id] && <p className="text-red-500 text-xl mt-5 font-bold">{errors[id].message}</p>}</div>
    </div>
  );
};

export default InputField;