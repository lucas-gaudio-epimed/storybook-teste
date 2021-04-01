import React from 'react';

import { TextFieldsInput } from './TextFields';

export default {
  title: 'Components/Inputs/TextFields',
  component: TextFieldsInput,
  decorators: [(Story) => <div style={{ margin: '2em' }}><Story/></div>],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

const Template = (args) => (
   <div style={{marginLeft: "2em"}}> 
    <div>
    <h3>Large Textfield</h3>
        <TextFieldsInput size="large"/>
    </div>
    <div>
        <h3>Medium Textfield</h3>
        <TextFieldsInput />
    </div>
    <div>
        <h3>Small Textfield</h3>
        <TextFieldsInput size="small" />
    </div>

    </div>
   )

export const Default = Template.bind({});
Default.args = {
  mode: "default",
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    mode: "disabled",
    label: 'Button',
    disabled: "disabled"
};

export const Error = Template.bind({});
Error.args = {
  mode: "error",
  label: 'Button',
};
