import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { createPost } from '../../pages/api/posts';

import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Heading, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

import Card from '../Card';
import ListInput from './ListInput';
import PostEditor from '../PostEditor';

interface Props {}

const schema = yup.object().shape({
  company: yup.string().required().min(2),
  title: yup.string().required(),
  url: yup.string().url().required('link must be a valid url'),
  deadline: yup.date().min(new Date(), 'deadline must be later than today'),
  description: yup.string().required(),
});

const NewPostForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  const [requiredSkill, setRequiredSkill] = useState<string>('');
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [niceToHaveSkill, setNiceToHaveSkill] = useState<string>('');
  const [niceToHaveSkills, setNiceToHaveSkills] = useState<string[]>([]);

  const onSubmit = async (data) => {
    const newPost = { ...data, requiredSkills, niceToHaveSkills };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.log(response.json());
    }
  };

  return (
    <Card padding="4">
      <Heading as="h2">Post a Job</Heading>
      <Text as="sub">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        faucibus ut arcu semper fringilla. Nam vitae metus dignissim, efficitur
        enim eu, porttitor neque. Praesent est orci, congue ac nisi vitae,
        consectetur aliquet lacus.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="company" isRequired isInvalid={errors.company} pt="4">
          <FormLabel>Company</FormLabel>
          <Input {...register('company')} placeholder="Company" />
          <FormErrorMessage>{errors.company?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="title" isRequired isInvalid={errors.title} pt="4">
          <FormLabel>Job title</FormLabel>
          <Input {...register('title')} placeholder="Job title" />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="url" isRequired isInvalid={errors.url} pt="4">
          <FormLabel>Link for applying</FormLabel>
          <Input {...register('url')} placeholder="Link" />
          <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="requiredSkills" pt="4">
          <FormLabel>Required skills</FormLabel>
          <FormHelperText mb="2">
            Skills an applicant should have
          </FormHelperText>
          <ListInput
            list={requiredSkills}
            listItem={requiredSkill}
            setList={setRequiredSkills}
            setListItem={setRequiredSkill}
            placeholder="Required skills"
          />
        </FormControl>
        <FormControl id="niceToHaveSkills" pt="4">
          <FormLabel>Nice to have skills</FormLabel>
          <FormHelperText mb="2">
            Skills that are not required, but would be nice to have
          </FormHelperText>
          <ListInput
            list={niceToHaveSkills}
            listItem={niceToHaveSkill}
            setList={setNiceToHaveSkills}
            setListItem={setNiceToHaveSkill}
            placeholder="Nice to have skills"
            colorScheme="green"
          />
        </FormControl>
        <FormControl
          id="deadline"
          isRequired
          isInvalid={errors.deadline}
          pt="4"
        >
          <FormLabel>Deadline</FormLabel>
          <Input {...register('deadline')} placeholder="Deadline date" />
          <FormErrorMessage>{errors.deadline?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="description"
          isRequired
          isInvalid={errors.description}
          pt="4"
        >
          <FormLabel>Description</FormLabel>
          <Textarea
            {...register('description')}
            placeholder="Type job description here"
          />
          <PostEditor />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="pink" mt="2" isFullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default NewPostForm;
