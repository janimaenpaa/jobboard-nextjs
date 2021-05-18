import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import SideBarLink from './SidebarLink';
import MobileMenu from './MobileMenu';

interface Props {
  handleToggle: any;
  isMobile: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: string;
  width: any;
}

const links = [
  { href: '/admin', title: 'Home' },
  { href: '/admin/posts', title: 'Posts' },
];

const Sidebar = ({
  handleToggle,
  isMobile,
  open,
  setOpen,
  user,
  width,
}: Props) => {
  const lightBlue = '#2f3748';
  const darkBlue = '#181923';

  return (
    <Flex
      alignItems="flex-start"
      bg={darkBlue}
      color="white"
      flexDirection="column"
      h="100%"
      left={0}
      position="fixed"
      pt={4}
      px={6}
      top={0}
      w={isMobile ? 'full' : width}
      zIndex="9999"
    >
      {isMobile ? (
        <MobileMenu user={user} handleToggle={handleToggle} />
      ) : (
        <Heading as="h2" size="md">
          Admin
        </Heading>
      )}

      <Flex direction="column" width="100%" mt="6">
        {links.map((link, index) => (
          <SideBarLink key={index} href={link.href} title={link.title} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
