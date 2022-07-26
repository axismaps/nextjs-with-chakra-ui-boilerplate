import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from '@chakra-ui/react';

import Atlas from '.';

export default {
  title: 'Atlas',
  component: Atlas,
} as Meta;

export const Default: Story = () => (
  <Box h="calc(100vh - 50px)" w="full">
    <Atlas />
  </Box>
);
