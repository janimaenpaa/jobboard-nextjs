import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Post } from '@prisma/client';
import Card from '../Card';
import { useRouter } from 'next/router';
import SkillButton from '../SkillBar/SkillButton';
import SkillBar from '../SkillBar';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const router = useRouter();
  const {
    id,
    title,
    company,
    deadline,
    description,
    createdAt,
    niceToHaveSkills,
    requiredSkills,
    status,
    updatedAt,
    url,
  } = post;

  const goToPostPage = () => router.push(`/posts/${id}`);

  return (
    <Card p="4" m="4" maxWidth="800px" onClick={goToPostPage}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Heading as="h2" size="sm" color="gray.500">
        {company}
      </Heading>
      <Flex>
        {createdAt} {deadline ? `| deadline: ${deadline}` : ''}
      </Flex>
      <Text>{description}</Text>
      <SkillBar
        requiredSkills={requiredSkills}
        niceToHaveSkills={niceToHaveSkills}
      />
    </Card>
  );
};

export default PostItem;
