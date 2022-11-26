import React from 'react';
import { FormProps } from './types';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './components/TextField';
import NumberField from './components/NumberField';

const renderFields = (fields: FormProps['fields']) => {
  return (
    <div>
      {Object.entries(fields).map(([fieldName, field]) => {
        if (field.type === 'text') {
          return <TextField key={fieldName} {...field} name={fieldName} />;
        }
        if (field.type === 'number') {
          return <NumberField key={fieldName} {...field} name={fieldName} />;
        }
        return `Unknown type for a field: ${fieldName}`;
      })}
    </div>
  );
};

export const Form = ({ fields, onSubmit }: FormProps) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {renderFields(fields)}
        <button type="submit">save</button>
      </form>
    </FormProvider>
  );
};
