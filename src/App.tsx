import React, { useState, useEffect } from "react";
import { VStack, HStack, Box, Text, Button, Menu, MenuButton, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi"; // Importa el icono de perfil
import { useUser } from "./context/UserContext";
import ConnectButton from "./components/ConnectButton";
import ShowUIButton from "./components/ShowUIButton";
import WalletDetail from "./components/WalletDetail"; // Importa el componente WalletDetail
import ChatBox from "./components/ChatBox";
import Marketplace from "./components/Marketplace";
import DisconnectButton from "./components/DisconnectButton"; // Importa el componente DisconnectButton
import { Project } from "./types";


function App() {
  const { user } = useUser();
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleChatSubmit = (message: string) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  // Definir la lista de proyectos
  const projects: Project[] = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      price: 100,
      category: "Tecnología",
      imageUrl: "URL de la imagen del proyecto 1"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      price: 200,
      category: "Arte",
      imageUrl: "URL de la imagen del proyecto 2"
    },
    // Agrega más objetos similares según sea necesario
  ];
  

  return (
    <Box className="App" minHeight="100vh" bg="#1a202c" color="white">
      <header className="App-header">
        <HStack justifyContent="space-between" alignItems="center" w="100%" px={6} py={4}>
          <Box display="flex" alignItems="center">
            <img
              src={require("./logoelo.png")}
              alt="Logo"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <Text fontSize="2xl" fontWeight="bold">
              Elo Wallet
            </Text>
          </Box>
          {user && (
            <Menu>
              <MenuButton
                as={Button}
                variant="outline"
                colorScheme="white"
                size="sm"
                borderRadius="md"
                _hover={{ bg: "blue.800" }}
                rightIcon={<Icon as={FiUser} />} // Utiliza el icono de perfil en el lado derecho del botón
              >
              </MenuButton>
              <MenuList>
                <MenuItem>Editar perfil</MenuItem>
                <MenuItem><DisconnectButton /></MenuItem> {/* Utilizar DisconnectButton directamente aquí */}
              </MenuList>
            </Menu>
          )}
        </HStack>
      </header>
      <main className="App-content">
        <VStack justifyContent="center" alignItems="center" spacing={6} p={6}>
          {!user ? (
            <ConnectButton />
          ) : (
            <>
              <WalletDetail /> {/* Muestra WalletDetail */}
              <ShowUIButton />
              <ChatBox onSubmit={handleChatSubmit} messages={chatMessages} />
              <Marketplace projects={projects} /> {/* Pasar la lista de proyectos como una propiedad */}
            </>
          )}
        </VStack>
      </main>
      <footer className="App-footer">
        <Box textAlign="center" py={4}>
          <Text fontSize="sm">¡Gracias por usar nuestra aplicación de billetera digital!</Text>
        </Box>
      </footer>
    </Box>
  );
}

export default App;
