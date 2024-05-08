import { useState, useEffect } from "react"
import { HStack, Box, VStack, Input, Button, Text } from "@chakra-ui/react"
import { useWeb3 } from "../context/Web3Context"
import { useUser } from "../context/UserContext"

const SignMessage = () => {
  const { web3 } = useWeb3()
  const { user } = useUser()

  const [message, setMessage] = useState("") // Estado para el mensaje
  const [signature, setSignature] = useState("") // Estado para la firma

  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión y tiene una dirección asignada
    if (user && web3) {
      // Generar un mensaje predefinido o basado en ciertos datos de la aplicación
      const defaultMessage = "Hello, this is an automated message from your crypto wallet."
      setMessage(defaultMessage)

      // Firmar automáticamente el mensaje utilizando la dirección del usuario
      const signAutoMessage = async () => {
        try {
          // Firmar el mensaje utilizando la dirección del usuario
          const signedMessage = await web3.eth.personal.sign(defaultMessage, user, "")
          // Establecer la firma generada en el estado
          setSignature(signedMessage)
        } catch (error) {
          console.error("Error al firmar el mensaje:", error)
        }
      }

      // Llamar a la función para firmar automáticamente el mensaje
      signAutoMessage()
    }
  }, [user, web3])

  // Manejar cambios en el campo de mensaje
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)

  return (
    <HStack justifyContent="flex-start" alignItems="flex-start">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="10px"
      >
        <VStack>
          {/* Campo de entrada para el mensaje */}
          <Input
            placeholder="Set Message"
            maxLength={20}
            onChange={handleInput}
            value={message} // Establecer el valor del mensaje
            w="300px"
          />
          {/* Mostrar la firma */}
          {signature && <Text>Firma: {signature}</Text>}
        </VStack>
      </Box>
    </HStack>
  )
}

export default SignMessage
