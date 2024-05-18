import React, { useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import UserMenu from "./components/UserMenu";
import ConnectButton from "./components/ConnectButton";
import ShowUIButton from "./components/ShowUIButton";
import ChatBox from "./components/ChatBox";
import ProjectCarousel from "./components/ProjectCarousel";
import Footer from "./components/Footer";
import { useUser } from "./context/UserContext";
import { Project } from "./types";
import { Card, Button } from "@nextui-org/react"; // Importamos Card y Button desde NextUI

function App() {
  const { user } = useUser();
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleChatSubmit = (message: string) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Black Bull",
      description: "En Club Criptoactivos, tuvimos la oportunidad de conversar sobre la tokenización de activos reales...",
      disponibles: 10,
      category: "Inversiones",
      imageUrl: "https://static.wixstatic.com/media/bf36ae_dd3f598dcff94e3cb892ce4e924dcc0a~mv2.png/v1/fit/w_776,h_459,q_90/bf36ae_dd3f598dcff94e3cb892ce4e924dcc0a~mv2.webp"
    },
    {
      id: 2,
      title: "Blockchain Economy London",
      description: "En dicho evento, tuvimos la oportunidad de de conversar sobre la tokenización...",
      disponibles: 20,
      category: "Blockchain",
      imageUrl: "https://static.wixstatic.com/media/bf36ae_c453fd286c474a5d8043e686689ee79b~mv2.jpeg/v1/fit/w_776,h_459,q_90/bf36ae_c453fd286c474a5d8043e686689ee79b~mv2.webp"
    },
    {
      id: 3,
      title: "MPWR Girls in charge",
      description: "La Directora General Eloisa Cadenas de Monetae Exchange convivió con grandes conferencistas...",
      disponibles: 200,
      category: "Tecnología",
      imageUrl: "https://static.wixstatic.com/media/bf36ae_ee1b24c898ad42548e17a126d1f8684b~mv2.png/v1/fit/w_776,h_459,q_90/bf36ae_ee1b24c898ad42548e17a126d1f8684b~mv2.webp"
    }
  ];

  return (
    <Box className="App" minHeight="100vh" bg="#1a202c" color="white">
      <UserMenu />
      <main className="App-content">
        <VStack justifyContent="center" alignItems="center" spacing={10} p={10}>
          {!user ? (
            <ConnectButton />
          ) : (
            <>
              <ShowUIButton />
              <ChatBox onSubmit={handleChatSubmit} messages={chatMessages} />
              <ProjectCarousel projects={projects} />
              <div className="mt-8">
                <Card>
                  <Button>This is an example button component from NextUI</Button>
                </Card>
              </div>
            </>
          )}
        </VStack>
      </main>
      <Footer />
    </Box>
  );
}

export default App;
