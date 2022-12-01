import { SubmitHandler, FieldValues } from 'react-hook-form';

export type FieldType = 'text' | 'number';

type FieldSchema = {
  type: FieldType | 'object';
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

export type FieldProps<T extends FieldType> = {
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
