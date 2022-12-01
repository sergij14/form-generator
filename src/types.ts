import { SubmitHandler, FieldValues } from 'react-hook-form';

type FieldSchema = {
  type: 'text' | 'number' | 'object';
};

type DefaultProps = {
  label: string;
  placeholder?: string;
};

type TextValidation = {
  required: {
    value: boolean;
    message: string;
  };
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
};

type NumberValidation = {
  required: {
    value: boolean;
    message: string;
  };
  min: {
    value: number;
    message: string;
  };
  max: {
    value: number;
    message: string;
  };
};

export type TextFieldProps = FieldSchema &
  DefaultProps & {
    type: 'text';
    validation?: Partial<TextValidation>;
  };

export type NumberFieldProps = FieldSchema &
  DefaultProps & {
    type: 'number';
    validation?: Partial<NumberValidation>;
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
