import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Contact from "../pages/ContactForm";
import MessageIcon from "../assets/icons/MessageIcon";

export default function ContactModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        href="/contact"
        variant="flat"
        radius="none"
        className="text-2xl bg-indigo-700 font-semibold"
        endContent={<MessageIcon />}
        onPress={onOpen}
      >
        Contact Us
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                OnSocial Marketing Solutions Intake Form
              </ModalHeader>
              <ModalBody>
                <Contact />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
