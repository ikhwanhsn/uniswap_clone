import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Model = () => {
  const walletMenu = ["Metamask", "Coinbase", "Wallet", "WalletConnect"];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="btn w-full">
        Connect Wallet
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {walletMenu.map((item) => (
              <div key={item} className="w-full">
                <button className="btn w-full mb-1">{item}</button>
              </div>
            ))}
          </ModalBody>

          <ModalFooter>
            <p>
              By connecting a wallet, you agree to Uniswap's Terms of Service
              and Privacy Policy.
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model;
