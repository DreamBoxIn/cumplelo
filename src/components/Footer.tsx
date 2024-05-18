import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign="center" className="App-footer">
      <Text 
        fontSize="sm" 
        maxWidth="400px" 
        margin="auto" 
      >
        Gracias por confiar en mí y aguantarme durante todo este tiempo. Crear tu propia billetera digital ha sido un honor. ¡Gracias por la oportunidad! Hecho con cariño ❤️
      </Text>
    </Box>
  );
};

export default Footer;
