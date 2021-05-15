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
      {requiredSkills?.map((skill, index) => (
        <SkillButton key={index} skill={skill} required />
      ))}
      {niceToHaveSkills?.map((skill, index) => (
        <SkillButton key={index} skill={skill} />
      ))}
    </Flex>
  );
};

export default SkillBar;
