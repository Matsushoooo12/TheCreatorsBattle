import React from "react";
import { Avatar, Flex } from "@chakra-ui/react";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useRouter } from "next/router";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MenuIcon from "../molecules/menuIcon";
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const LeftSidebar = () => {
    const router = useRouter();
    const sx = { fill: "url(#linearColors)", fontSize: 28 }
  return (
    <Flex
      bg="white"
      h="100vh"
      minW="96px"
      transition="all 0.3s ease-in-out"
      alignItems="center"
      direction="column"
      boxShadow="lg"
      pt="120px"
        pb="40px"
      justifyContent="space-between"
    >
      <Flex direction="column" w="100%">
      <MenuIcon onClick={() => router.push('/')} url={"http://localhost:3000/"}>
        <SignalCellularAltIcon
            sx={sx}
          />
      </MenuIcon>
      <MenuIcon onClick={() => router.push('/projects')} url={"http://localhost:3000/projects"}>
        <EmojiEventsIcon sx={sx} />
      </MenuIcon>
      <MenuIcon onClick={() => router.push('/users')} url={"http://localhost:3000/users"}>
        <EmojiObjectsRoundedIcon sx={sx} />
      </MenuIcon>
      <MenuIcon onClick={() => router.push('/notification')} url={"http://localhost:3000/notification"}>
        <NotificationsRoundedIcon sx={sx} />
      </MenuIcon>
      </Flex>
      <Flex direction="column" w="100%">
      <MenuIcon onClick={() => router.push('/settings')} url={"http://localhost:3000/settings"}>
        <SettingsRoundedIcon sx={sx} />
      </MenuIcon>
      <Flex
        p="20px"
        _hover={{ bg: "gray.100", cursor: "pointer" }}
        w="100%"
        justifyContent="center"
        mb="24px"
      >
        <Avatar w="28px" h="28px" />
      </Flex>
      </Flex>
    </Flex>
  )
}

export default LeftSidebar