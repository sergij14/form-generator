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
    controls: { expanded: true },
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
};

export const Default = Template.bind({});

Default.args = {
  fields,
  onSubmit: values => {
    console.log(values);
  },
};
