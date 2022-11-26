import { HTMLInputTypeAttribute } from 'react';
import { SubmitHandler, FieldValues } from 'react-hook-form';

type FieldSchema = {
  type: 'text' | 'number' | 'array' | 'object';
};

type DefaultProps = {
  label: string;
  placeholder?: string;
};

export type TextFieldProps = FieldSchema &
  DefaultProps & {
    type: 'text';
    htmlType?: HTMLInputTypeAttribute;
  };

export type NumberFieldProps = FieldSchema &
  DefaultProps & {
    type: 'number';
    min?: number;
    max?: number;
  };

export type ObjectFieldProps = FieldSchema &
  DefaultProps & {
    type: 'object';
    properties: Fields;
  };

export type Field = TextFieldProps | NumberFieldProps | ObjectFieldProps;

export type Fields = Record<string, Field>;
export interface FormProps {
  fields: Fields;
  onSubmit: SubmitHandler<FieldValues>;
}
