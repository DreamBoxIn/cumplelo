import { useEffect, useState } from "react";
import { Text, Flex, Divider, Button, useToast } from "@chakra-ui/react";
import { useWeb3 } from "../context/Web3Context";
import { useUser } from "../context/UserContext";

const WalletDetail = () => {
  const { web3 } = useWeb3();
  const { user } = useUser();
  const toast = useToast(); // Para mostrar mensajes de éxito al copiar

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchWalletDetails = async () => {
      if (!user || !web3) return;

      try {
        setAddress(user);

        const balance = await web3.eth.getBalance(user);
        // Convertimos el balance a Ether y lo redondeamos a 4 decimales
        const balanceInEther = parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(4);
        setBalance(balanceInEther);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWalletDetails();
}, [user, web3]);


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
  <Flex direction="column" alignItems="center" borderWidth="1px" borderRadius="md" p={4}>
    <Flex direction="row" justifyContent="space-between" width="100%" mb={4}>
      <Text fontWeight="bold">
        Balance
      </Text>
      <Text fontFamily="monospace">{balance} ETH</Text>
    </Flex>
    <Divider mb={4} />
    <Flex direction="row" justifyContent="space-between" width="100%">
      <Text fontWeight="bold">
        Address
      </Text>
      <Flex alignItems="center">
        <Text fontFamily="monospace">{address}</Text>
        <Button size="sm" ml={2} onClick={copyToClipboard}>
          Copiar
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

};

export default WalletDetail;
