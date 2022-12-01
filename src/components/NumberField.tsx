import React from 'react';
import { useFormContext } from 'react-hook-form';
import { NumberFieldProps } from '../types';

function NumberField(props: NumberFieldProps & { name: string }) {
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
        type="number"
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && <p>{`${errors[name]?.message}`}</p>}
    </div>
  );
}

export default NumberField;
