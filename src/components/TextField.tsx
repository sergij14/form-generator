import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../types';

function TextField(props: FieldProps<'text'> & { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, placeholder, validation } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && <p>{`${errors[name]?.message}`}</p>}
    </div>
  );
}

export default TextField;
