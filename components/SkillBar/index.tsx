import { Flex } from '@chakra-ui/layout';
import React from 'react';
import SkillButton from './SkillButton';

interface Props {
  requiredSkills?: string[];
  niceToHaveSkills?: string[];
}

const SkillBar = ({ requiredSkills, niceToHaveSkills }: Props) => {
  return (
    <Flex wrap="wrap">
      {requiredSkills?.map((skill) => (
        <SkillButton skill={skill} isRequired />
      ))}
      {niceToHaveSkills?.map((skill) => (
        <SkillButton skill={skill} />
      ))}
    </Flex>
  );
};

export default SkillBar;
