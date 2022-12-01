import React from 'react';
import { FormProps, ObjectFieldProps } from './Form.types';
import { FormProvider, useForm } from 'react-hook-form';
import Field from './components/Field';
import { Button, MainLabel } from './Form.styles';

const ObjectField = (props: ObjectFieldProps & { name: string }) => {
  const { label, properties } = props;

  return (
    <div>
      <MainLabel>{label}</MainLabel>
      {renderFields(properties)}
    </div>
  );
};

const renderFields = (fields: FormProps['fields']) => {
  return (
    <div>
      {Object.entries(fields).map(([fieldName, field]) => {
        if (field.type === 'text') {
          return <Field key={fieldName} {...field} name={fieldName} />;
        }
        if (field.type === 'number') {
          return <Field key={fieldName} {...field} name={fieldName} />;
        }
        if (field.type === 'object') {
          return <ObjectField key={fieldName} {...field} name={fieldName} />;
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
        <Button type="submit">Save</Button>
      </form>
    </FormProvider>
  );
};
