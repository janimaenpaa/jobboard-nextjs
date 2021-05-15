import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Heading, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import Card from '../Card';
import ListInput from './ListInput';

interface Props {}

const NewPostForm = (props: Props) => {
  const [requiredSkill, setRequiredSkill] = useState<string>('');
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [niceToHaveSkill, setNiceToHaveSkill] = useState<string>('');
  const [niceToHaveSkills, setNiceToHaveSkills] = useState<string[]>([]);

  return (
    <Card maxWidth="800px" padding="4">
      <Heading as="h2">Post a Job</Heading>
      <Text as="sub">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        faucibus ut arcu semper fringilla. Nam vitae metus dignissim, efficitur
        enim eu, porttitor neque. Praesent est orci, congue ac nisi vitae,
        consectetur aliquet lacus.
      </Text>
      <form>
        <FormControl id="company" isRequired pt="4">
          <FormLabel>Company</FormLabel>
          <Input placeholder="Company" />
        </FormControl>
        <FormControl id="title" isRequired pt="4">
          <FormLabel>Job title</FormLabel>
          <Input placeholder="Job title" />
        </FormControl>
        <FormControl id="url" isRequired pt="4">
          <FormLabel>Link for applying</FormLabel>
          <Input placeholder="Link" />
        </FormControl>
        <FormControl id="requiredSkills" pt="4">
          <FormLabel>Required skills</FormLabel>
          <FormHelperText mb="2">
            Skills an applicant should have
          </FormHelperText>
          <ListInput placeholder="Required skills" />
        </FormControl>
        <FormControl id="niceToHaveSkills" pt="4">
          <FormLabel>Nice to have skills</FormLabel>
          <FormHelperText mb="2">
            Skills that are not required, but would be nice to have
          </FormHelperText>
          <ListInput placeholder="Nice to have skills" colorScheme="green"/>
        </FormControl>
        <FormControl id="deadline" isRequired pt="4">
          <FormLabel>Deadline</FormLabel>
          <Input placeholder="Deadline date" />
        </FormControl>
        <FormControl id="description" isRequired pt="4">
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Type job description here" />
        </FormControl>
        <Button type="submit" colorScheme="pink" mt="2" isFullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default NewPostForm;
