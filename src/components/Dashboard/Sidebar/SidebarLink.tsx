import React from 'react';
import Link from 'next/link';
import { Flex, FlexProps } from '@chakra-ui/layout';
import { Button, ButtonProps } from '@chakra-ui/button';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

interface Props extends ButtonProps {
  href: string;
  title: string;
  isActive?: boolean;
}

{
  /* <Flex
      width="100%"
      borderRadius="5"
      bg={isActive && lightBlue}
      _hover={{ bg: lightBlue, width: '100%' }}
      p="1"
      {...props}
    >
      <Link href={href} children={title} />
    </Flex> */
}

const SideBarLink = ({ href, title, isActive, ...props }: Props) => {
  const router = useRouter();
  const lightBlue = '#2f3748';
  const darkBlue = '#181923';
  return (
    <Button
      bg={darkBlue}
      _hover={{ bg: lightBlue }}
      _active={{ bg: lightBlue }}
      _focus={{ outline: 'none' }}
      onClick={() => router.push(href)}
      justifyContent="flex-start"
      {...props}
      fontWeight="normal"
    >
      {title}
    </Button>
  );
};

export default SideBarLink;
