import React from 'react';
import { Box, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react';
import DisconnectButton from './DisconnectButton';
import WalletDetail from './WalletDetail';

const UserMenu = () => {
  const menuBgColor = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(45, 55, 72, 0.8)');
  const itemHoverBgColor = useColorModeValue('gray.300', 'gray.700');
  const itemHoverTextColor = useColorModeValue('gray.800', 'blue');
  
  return (
    <Box height="25vh" display="flex" justifyContent="center" alignItems="center">
      <Menu>
        <MenuButton
          as={Box}
          bg="transparent"
          borderWidth="0"
          _hover={{ bg: "transparent" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          p="5px" // Ajusta el padding para dar espacio alrededor de la imagen
        >
          <img
            src={require("../logoelo.png")}
            alt="Logo"
            style={{ borderRadius: "50%", marginRight: "5px", marginTop: "auto", marginBottom: "auto" }} // Añade margen arriba y abajo para centrar verticalmente
          />
        </MenuButton>
        <MenuList bg={menuBgColor}>
          <MenuItem _hover={{ bg: itemHoverBgColor, color: itemHoverTextColor }}>
            <WalletDetail />
          </MenuItem>
          <MenuItem _hover={{ bg: itemHoverBgColor, color: itemHoverTextColor }}>
            Mi regalo
          </MenuItem>
          <MenuItem _hover={{ bg: itemHoverBgColor, color: itemHoverTextColor }}>
            <DisconnectButton />
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserMenu;
