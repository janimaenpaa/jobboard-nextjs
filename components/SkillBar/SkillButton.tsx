import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/button';

interface Props extends ButtonProps {
  skill: string;
  isRequired?: boolean;
}

const SkillButton = (props: Props) => {
  const { skill, isRequired } = props;
  const color = isRequired ? 'blue' : 'green';
  return (
    <Button my="2" mr="2" colorScheme={color} size="sm" {...props}>
      {skill}
    </Button>
  );
};

export default SkillButton;
