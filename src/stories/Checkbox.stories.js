import React from 'react';

import { CheckboxInput } from './Checkbox';

export default {
  title: 'Components/Inputs/Checkbox',
  component: CheckboxInput,
  decorators: [(Story) => <div style={{ margin: '2em' }}><Story/></div>],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
     < CheckboxInput style={{marginBottom: "1em"}} />
     < CheckboxInput disabled={true} />

    </div>
   )

export const Checkbox = Template.bind({});
Checkbox.args = {
  primary: true,
  label: 'Button',
};

