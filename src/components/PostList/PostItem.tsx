import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Post } from '@prisma/client';
import Card from '../Card';
import { useRouter } from 'next/router';
import SkillButton from '../SkillBar/SkillButton';
import SkillBar from '../SkillBar';
import { formatDate } from '../../libs/dates';

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
    <Card p="4" mb="4" cursor="pointer" onClick={goToPostPage}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Heading as="h2" size="sm" color="gray.500">
        {company}
      </Heading>
      <Flex>
        published {formatDate(createdAt)}{' '}
        {deadline ? `| deadline ${formatDate(deadline)}` : ''}
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
