import React from 'react';
import { ArgTypes, ComponentMeta, Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';

const fields: FormProps['fields'] = {
  email: {
    type: 'text',
    label: 'Email',
    validation: {
      required: {
        value: true,
        message: 'Field is required',
      },
    },
  },

  age: {
    type: 'number',
    label: 'Age',
    validation: {
      required: {
        value: true,
        message: 'Field is required',
      },
      min: {
        value: 18,
        message: 'Min age is 18',
      },
    },
  },

  details: {
    type: 'object',
    label: 'Details',
    properties: {
      firstName: {
        type: 'text',
        label: 'Name',
      },
      lastName: {
        type: 'text',
        label: 'Last name',
      },
    },
  },
};

const formControls: Partial<ArgTypes<FormProps>> = {
  fields: {
    name: 'Fields',
    description: 'Fields schema for generating the form',
    table: {
      type: {
        summary: JSON.stringify(
          {
            fields: {
              email: {
                type: 'text',
                label: 'Email',
              },
            },
          },
          null,
          4
        ),
      },
    },
  },
};

export default {
  title: 'Form',
  component: Form,
  args: {
    fields,
    onSubmit: (values) => {
      console.log(values);
    },
  },
  argTypes: formControls,
  parameters: {
    controls: {
      include: Object.values(formControls).map((control) => control.name),
    },
  },
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
