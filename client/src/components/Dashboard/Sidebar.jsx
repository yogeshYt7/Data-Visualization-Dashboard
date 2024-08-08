import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  MdAnalytics,
  MdAssignment,
  MdCalendarToday,
  MdDashboard,
  MdExitToApp,
  MdInsertDriveFile,
  MdPeople,
  MdSettings,
} from "react-icons/md";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider
              mb={4}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />

            <List spacing={3}>
              {/* ... Your list items */}
              <ListItem cursor="pointer">
                <ListIcon as={MdDashboard} fontSize="xl" />
                Dashboard
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAssignment} fontSize="xl" />
                Tasks
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdPeople} fontSize="xl" />
                Users
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                Calendar
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                Files
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAnalytics} fontSize="xl" />
                Analytics
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdExitToApp} fontSize="xl" />
                Logout
              </ListItem>
            </List>

            <Flex alignItems="center" mt="140%">
              <Avatar
                size="lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTzuts7fqFgpwi5i5gpaGLH5H_KTDuaInIcxT85uR6_s88ZsZr-UnvSMqZYFDo83kiqA&usqp=CAU" mr={4}
              />
              <Box>
                <Heading size="md">Yogesh Yt7</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Web Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;
