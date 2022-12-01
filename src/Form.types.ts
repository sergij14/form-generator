import { SubmitHandler, FieldValues } from 'react-hook-form';

type SingleFieldType = 'text' | 'number';

type FieldSchema = {
  type: SingleFieldType | 'object';
};

type DefaultProps = {
  label: string;
  placeholder?: string;
};

type RequiredValidation = {
  value: boolean;
  message: string;
};

type MinMaxValidation = {
  value: number;
  message: string;
};

type TextValidation = {
  required: RequiredValidation;
  minLength: MinMaxValidation;
  maxLength: MinMaxValidation;
};

type NumberValidation = {
  required: RequiredValidation;
  min: MinMaxValidation;
  max: MinMaxValidation;
};

export type FieldProps<T extends SingleFieldType> = {
  type: T;
  validation?: Partial<T extends 'text' ? TextValidation : NumberValidation>;
} & FieldSchema &
  DefaultProps;

export type ObjectFieldProps = FieldSchema &
  DefaultProps & {
    type: 'object';
    properties: Fields;
  };

export type Field = FieldProps<'text'> | FieldProps<'number'> | ObjectFieldProps;

export type Fields = Record<string, Field>;
export interface FormProps {
  fields: Fields;
  onSubmit: SubmitHandler<FieldValues>;
}
