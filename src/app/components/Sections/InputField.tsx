"use client"
import { useEffect, useState } from 'react';
import { InputFieldProps } from '../types';

const InputField = ({ id, type, register, placeholder, disabled = false, registerOptions = {}, errors }: InputFieldProps) => {
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
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <input
        {...register(id, registerOptions)}
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete='off'
        onChange={handleChange}
        className='w-full border border-gray-400 rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-xl sm:text-2xl bg-white/20 focus:bg-white/20 focus:outline-none'
      />
      <div className='h-[30px] mt-2'>
        {errors?.[id] && <p className="text-red-500 text-base sm:text-lg font-bold">{errors[id].message}</p>}
      </div>
    </div>
  );
};

export default InputField;