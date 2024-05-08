import React, { useState } from "react";
import { VStack, HStack, Box, Text, Button } from "@chakra-ui/react";
import { useUser } from "./context/UserContext";
import ConnectButton from "./components/ConnectButton";
import WalletDetail from "./components/WalletDetail";
import DisconnectButton from "./components/DisconnectButton";
import ShowUIButton from "./components/ShowUIButton";
import ChatBox from "./components/ChatBox";

function App() {
  const { user } = useUser();
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleChatSubmit = (message: string) => {
    // Aquí puedes manejar la lógica para enviar el mensaje al servidor o procesarlo de alguna otra manera
    // Por ejemplo, podrías enviar el mensaje a través de una API o almacenarlo localmente
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <Box className="App" minHeight="100vh" bg="#1a202c" color="white">
      <header className="App-header">
      <HStack justifyContent="space-between" alignItems="center" w="100%" px={6} py={4}>
  <Box>
    <Text fontSize="2xl" fontWeight="bold">
      AI Wallet
    </Text>
  </Box>
  {user && (
    <HStack spacing={4}>
      <Button>
        <DisconnectButton />
      </Button>
      <Button
        variant="outline"
        colorScheme="white"
        size="sm"
        borderRadius="md"
        _hover={{ bg: "blue.800" }}
      >
        Mi perfil
      </Button>
    </HStack>
  )}
</HStack>

      </header>
      <main className="App-content">
        <VStack justifyContent="center" alignItems="center" spacing={6} p={6}>
          {!user ? (
            <ConnectButton />
          ) : (
            <>
              <WalletDetail />
              <HStack spacing={4}>
                <ShowUIButton />
              </HStack>
            </>
          )}
        </VStack>
      </main>
      <footer className="App-footer">
         {/* Aquí se incluye el componente ChatBox y se pasa la función handleChatSubmit como prop onSubmit */}
      <ChatBox onSubmit={handleChatSubmit} messages={chatMessages} />
        <Box textAlign="center" py={4}>
          <Text fontSize="sm">¡Gracias por usar nuestra aplicación de billetera digital!</Text>
        </Box>
      </footer>
    </Box>
  );
}

export default App;
