"use client";

import { useState } from "react";
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
import Model from "./Model";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openSettings, setOpenSettings] = useState(false);
  const [openTokenOne, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <main className="w-2/5 mx-auto bg-slate-50 p-5 rounded-xl shadow-md mt-20">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Swap</h1>
        <>
          <button className="btn" onClick={onOpen}>
            Settings
          </button>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <h1>tes</h1>
              </ModalBody>

              <ModalFooter>
                <p>footer</p>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </section>
      <section className="mt-2 flex gap-1">
        <input
          type="number"
          placeholder="0"
          className="input input-bordered w-full"
        />
        <button className="btn w-32">ETH</button>
      </section>
      <section className="mt-2 flex gap-1">
        <input
          type="number"
          placeholder="0"
          className="input input-bordered w-full"
        />
        <button className="btn w-32">ETH</button>
      </section>
      <section className="mt-2 w-full">
        <Model />
      </section>
    </main>
  );
};

export default HeroSection;
