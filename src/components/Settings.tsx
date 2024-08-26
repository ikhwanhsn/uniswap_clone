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

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button className="btn" onClick={onOpen}>
        Settings
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3>Slippage Tolerance</h3>
            <section className="flex gap-1 mt-1">
              <button className="btn">Auto</button>
              <input
                type="number"
                placeholder="0"
                className="input input-bordered w-full text-right pr-7"
              />
            </section>
            <h3 className="mt-2">Slippage Tolerance</h3>
            <section className="flex gap-1 mt-1">
              <input
                type="number"
                placeholder="0"
                className="input input-bordered w-full text-right pr-7"
              />
              <button className="btn">Minutes</button>
            </section>
            <h3 className="mt-2">Interface Settings</h3>
            <section className="flex gap-1 items-center justify-between mt-3">
              <p>Transaction Deadline</p>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </section>
          </ModalBody>

          <ModalFooter>{/* <p>footer</p> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
