import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';

const meta: Meta = {
  title: 'Form',
  component: Form,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { include: ['fields'] },
  },
};

export default meta;

const Template: Story<FormProps> = args => <Form {...args} />;

const fields: FormProps['fields'] = {
  email: {
    type: 'text',
    label: 'email',
    htmlType: 'text',
  },

  age: {
    type: 'number',
    label: 'age',
    min: 18,
  },

  details: {
    type: 'object',
    label: 'details',
    properties: {
      firstName: {
        type: 'text',
        label: 'name',
      },
      lastName: {
        type: 'text',
        label: 'last name',
      },
    },
  },
};

export const Default = Template.bind({});

Default.args = {
  fields,
  onSubmit: values => {
    console.log(values);
  },
};
