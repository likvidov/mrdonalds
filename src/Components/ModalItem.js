import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 400px;
`;

const ModalHeader = styled.div`
  font-family: 'Pacifico';
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />

        <ModalContent>
          <ModalHeader>
            <p>{openItem.name}</p>
            <p>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
          </ModalHeader>

          <Button>Добавить</Button>
        </ModalContent>
      </Modal>
    </Overlay>
  )
};