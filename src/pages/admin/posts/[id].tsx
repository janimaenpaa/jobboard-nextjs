import { Post } from '.prisma/client';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/editable';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Heading, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import React from 'react';
import Card from '../../../components/Card';
import { formatDate } from '../../../lib/dates';
import { getPostById } from '../../../services/PostService';

interface Props {}

const EditPost = (props: Props) => {
  const { query } = useRouter();
  const { data, error } = getPostById(Number(query.id));

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const {
    title,
    company,
    id,
    createdAt,
    deadline,
    description,
    niceToHaveSkills,
    requiredSkills,
    status,
    updatedAt,
    url,
  } = data;
  return (
    <React.Fragment>
      <Heading mb="2">Edit Post</Heading>
      <Card>
        <form>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Editable defaultValue={title}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>Company</FormLabel>
            <Editable defaultValue={company}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Editable defaultValue={description}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Editable defaultValue={status}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>URL</FormLabel>
            <Editable defaultValue={url}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>Required skills</FormLabel>
            {requiredSkills.map((skill) => (
              <p>{skill}</p>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>Nice to have skills</FormLabel>
            {niceToHaveSkills.map((skill) => (
              <p>{skill}</p>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>Deadline</FormLabel>
            <Editable defaultValue={String(formatDate(deadline))}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
          <FormControl>
            <FormLabel>Created at</FormLabel>
            <Editable defaultValue={String(formatDate(createdAt))}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>{' '}
          <FormControl>
            <FormLabel>Updated at</FormLabel>
            <Editable defaultValue={String(formatDate(updatedAt))}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          </FormControl>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default EditPost;
