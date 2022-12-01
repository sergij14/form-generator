import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Error, Input, Label } from '../Form.styles';
import { FieldProps } from '../Form.types';

function NumberField(props: FieldProps<'number'> & { name: string }) {
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
        hasError={hasError}
        id={name}
        type="number"
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {hasError && <Error>{`${errors[name]?.message}`}</Error>}
    </div>
  );
}

export default NumberField;
