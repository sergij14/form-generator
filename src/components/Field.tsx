import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Error, Input, Label } from '../Form.styles';
import { FieldProps, FieldType } from '../Form.types';

function Field<T extends FieldType>(props: FieldProps<T> & { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, placeholder, validation, type } = props;

  const hasError = errors[name] ? true : false;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        hasError={errors[name] ? true : false}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {hasError && <Error>{`${errors[name]?.message}`}</Error>}
    </div>
  );
}

export default Field;
