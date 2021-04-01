import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
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
      <div>
          <h3> Large Button</h3>
          <Button {...args} size="large" />
          <Button {...args} size="large" disabled="disabled" />
      </div>

      <div>
          <h3> Medium Button</h3>
          <Button {...args} />
          <Button {...args} disabled="disabled" />
      </div>

      <div>
          <h3> Small Button</h3>
          <Button {...args} size="small" />
          <Button {...args} size="small" disabled="disabled" />
      </div>

    </div>
   )

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  label: 'Button',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  mode: "primary",
  outline: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  label: 'Button',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  mode: "secondary",
  label: 'Button',
  outline: true,
};

export const error = Template.bind({});
error.args = {
  mode: "error",
  label: 'Button',
  outline: true,
};

