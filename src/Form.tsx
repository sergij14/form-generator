import React from 'react';
import { FormProps } from './types';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './components/TextField';

const renderFields = (fields: FormProps['fields']) => {
  return (
    <div>
      {Object.entries(fields).map(
        ([fieldName, field]) => {
            if(field.type === 'text') {
                return <TextField {{...field, name: fieldName}} />
            }
            return 'notText'
        }
      )}
    </div>
  );
};

export const Form = ({ fields, onSubmit }: FormProps) => {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        {renderFields(fields)}
        <button type="submit">save</button>
      </form>
    </FormProvider>
  );
};
