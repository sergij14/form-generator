import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';

const meta: Meta = {
  title: 'Welcome',
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
  },
};

export const Default = Template.bind({});

Default.args = {
  fields,
  onSubmit: values => {
    console.log(values);
  },
};
