import React, { useState, useEffect } from "react";
import { Text, Flex, Button, useToast } from "@chakra-ui/react";
import { useWeb3 } from "../context/Web3Context";
import { useUser } from "../context/UserContext";
import { FiCopy } from "react-icons/fi"; // Importa el icono de copiar

// Subcomponente para mostrar el detalle del balance
const BalanceDetail = ({ balance }: { balance: string }) => {
  return (
    <Flex direction="column" alignItems="flex-start" mb={0}> {/* Ajuste del margen inferior */}
      <Text fontWeight="extrabold" fontSize="28px" mb={2.5}>Balance</Text>
      <Text fontFamily="monospace" fontSize="20px"> {balance}</Text>
    </Flex>
  );
};

// Subcomponente para mostrar el detalle de la dirección
const AddressDetail = ({ address }: { address: string }) => {
  const toast = useToast(); // Para mostrar mensajes de éxito al copiar

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Dirección copiada al portapapeles",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" alignItems="flex-end" ml={50} mt={3}> {/* Ajuste del margen izquierdo */}
      <Text fontWeight="bold" mb={4}>Address</Text>
      <Flex alignItems="center">
        <Text fontFamily="monospace" mb={4} mr={0}>{address.slice(0, 10)}</Text>
        <Button size="sm" mb={4} onClick={copyToClipboard} bg="transparent" _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }} _focus={{ boxShadow: "none" }} leftIcon={<FiCopy color="white" />} ml={0}></Button> {/* Botón de copiar con icono en blanco */}
      </Flex>
    </Flex>
  );
};

const WalletDetail = () => {
  const { web3 } = useWeb3();
  const { user } = useUser();

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchWalletDetails = async () => {
      if (!user || !web3) return;

      try {
        setAddress(user);

        const balance = await web3.eth.getBalance(user);
        const balanceInEther = parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(4);
        setBalance(balanceInEther);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWalletDetails();
  }, [user, web3]);

  return (
    <Flex direction="row" alignItems="flex-start" borderWidth="01px" borderRadius="md" p={5}> {/* Ajuste del margen izquierdo */}
      <BalanceDetail balance={`${balance} ETH`} />
      <Flex flexGrow={1} />
      <AddressDetail address={address} />
    </Flex>
  );
};

export default WalletDetail;
