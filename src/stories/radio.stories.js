import React from 'react';

import { RadioInput } from './Radio';

export default {
  title: 'Components/Inputs/Radio',
  component: RadioInput,
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
     < RadioInput style={{marginBottom: "1em"}} />
     < RadioInput disabled={true} />

    </div>
   )

export const Radio = Template.bind({});
Radio.args = {
  primary: true,
  label: 'Button',
};



