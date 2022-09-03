import React, { useState } from "react";
import ModalConfirmOrder from "../components/ModalConfirmOrder";

const MAX_QTY = 3;

const exo1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [qty, setQty] = useState(0);
  const open = () => setIsOpen(true);
  const onConfirm = () => {
    setIsOpen(false);
    window.open("https://admin.dave.reparcar.ovh/find-your-part", "_blank");
  };
  const updateQty: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const qty = Number(event.target.value) || 0;
    if (qty >= 0 && qty <= MAX_QTY) {
      setQty(qty);
    }
  };
  return (
    <>
      <input type={"number"} onChange={updateQty} placeholder="quantité" />
      <button onClick={open}>Envoyer ma proposition</button>

      <ModalConfirmOrder
        onConfirm={onConfirm}
        isOpen={isOpen}
        qty={qty}
        max={MAX_QTY}
        deliveryDate="03/01/2022"
      />
    </>
  );
};

export default exo1;
