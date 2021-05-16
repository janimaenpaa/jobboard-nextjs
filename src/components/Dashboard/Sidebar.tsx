import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';
import ProfileBar from './UserInfo';
import SideBarLink from './SideBarLink';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}

const links = [
  { href: '/admin', title: 'Home' },
  { href: '/admin/posts', title: 'Posts' },
];

const Sidebar = ({ isOpen, setIsOpen, isMobile }: Props) => {
  const lightBlue = '#2f3748';
  const darkBlue = '#181923';

  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      p={5}
      w={isMobile ? 'full' : '300px'}
      h="100%"
      bg={darkBlue}
      color="white"
      flexDirection="column"
      alignItems="flex-start"
    >
      <ProfileBar />
      <Flex direction="column" width="100%" mt="4">
        {links.map((link, index) => (
          <SideBarLink key={index} href={link.href} title={link.title} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
