import { Post } from '.prisma/client';
import { Heading, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import React from 'react';
import Card from '../../../components/Card';
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
    <Card>
      <Heading>
        {title} - #{id}
      </Heading>
      <Text>Company: {company}</Text>
      <Text>Description: {description}</Text>
      <Text>status: {status}</Text>
      <Text>Url: {url}</Text>
      <Text>
        Required skills:{' '}
        {requiredSkills.map((skill) => (
          <p>{skill}</p>
        ))}
      </Text>
      <Text>
        Nice to have skills:{' '}
        {niceToHaveSkills.map((skill) => (
          <p>{skill}</p>
        ))}
      </Text>
      <Text>Deadline: {deadline}</Text>
      <Text>Created at: {createdAt}</Text>
      <Text>Updated at: {updatedAt}</Text>
    </Card>
  );
};

export default EditPost;
