"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

type TokensProps = {
  tokenOne?: any;
  tokenTwo?: any;
  setTokenOne?: any;
  setTokenTwo?: any;
  buttonToken: string;
};

const Tokens = ({
  tokenOne,
  tokenTwo,
  setTokenOne,
  setTokenTwo,
  buttonToken,
}: TokensProps) => {
  const dataTokens = [
    {
      name: "ETH",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    {
      name: "DAI",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
    },
    {
      name: "USDC",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    },
    {
      name: "USDT",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    },
    {
      name: "MATIC",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
    },
    {
      name: "WBTC",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button className="btn w-32" onClick={onOpen}>
        {buttonToken === "one"
          ? tokenOne.name || "ETH"
          : tokenTwo.name || "USDT"}
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input
              type="text"
              placeholder="Search name or paste address"
              className="input input-bordered w-full -mt-5"
            />
            <section className="mt-2 grid-cols-4 grid gap-2">
              {dataTokens.map((item, index) => (
                <div key={index} className="w-full">
                  <button
                    className="btn w-full mb-1"
                    onClick={() => {
                      buttonToken === "one"
                        ? setTokenOne(item)
                        : setTokenTwo(item);
                      onClose();
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </section>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tokens;
