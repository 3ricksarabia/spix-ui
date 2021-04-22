import * as React from "react";

import { Button } from "./src/";

export default {
    title: "Example/Button",
    component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button",
};
