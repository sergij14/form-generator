import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Error, Input, Label } from '../Form.styles';
import { FieldProps } from '../Form.types';

function TextField(props: FieldProps<'text'> & { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, placeholder, validation } = props;

  const hasError = errors[name] ? true : false;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        hasError={errors[name] ? true : false}
        type="text"
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {hasError && <Error>{`${errors[name]?.message}`}</Error>}
    </div>
  );
}

export default TextField;
