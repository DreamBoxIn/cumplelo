import React, { useState, useEffect } from "react";
import { Flex, Text, Button, useToast, useColorModeValue } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useWeb3 } from "../context/Web3Context";
import { useUser } from "../context/UserContext";

interface BalanceDetailProps {
  balance: string;
}

const BalanceDetail: React.FC<BalanceDetailProps> = ({ balance }) => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Flex direction="column" alignItems="flex-start" mb={0}>
      <Text fontWeight="extrabold" fontSize="28px" mb={2.5} color={textColor}>Balance</Text>
      <Text fontFamily="monospace" fontSize="20px" color={textColor}>{balance}</Text>
    </Flex>
  );
};

interface AddressDetailProps {
  address: string;
}

const AddressDetail: React.FC<AddressDetailProps> = ({ address }) => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const toast = useToast();

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
    <Flex direction="column" alignItems="flex-end" ml={50} mt={3}>
      <Text fontWeight="bold" mb={4} color={textColor}>Address</Text>
      <Flex alignItems="center">
        <Text fontFamily="monospace" mb={4} mr={0} color={textColor}>{address.slice(0, 10)}</Text>
        <Button size="sm" mb={4} onClick={copyToClipboard} bg="transparent" _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }} _focus={{ boxShadow: "none" }} leftIcon={<FiCopy color="black" />} marginEnd={-5} ml={0}></Button>
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
    <Flex direction="row" alignItems="flex-start" borderWidth="01px" borderRadius="md" p={5}>
      <BalanceDetail balance={`${balance} ETH`} />
      <Flex flexGrow={1} />
      <AddressDetail address={address} />
    </Flex>
  );
};

export default WalletDetail;
