import React, { FC } from "react";
import styles from "../styles/exo1.module.css";

interface ModalProps {
  isOpen: boolean;
  qty: number;
  max: number;
  deliveryDate: string;
  onConfirm: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onConfirm,
  qty,
  max,
  deliveryDate,
}) => {
  return (
    <dialog open={isOpen} className={styles.modal}>
      <h2 className={styles.modalTitle}>
        Votre proposition de pièce est transmise au client
      </h2>
      <div className={styles.modalContent}>
        <p>
          Pièce proposées: {qty}/{max}
        </p>
        <p>Expiration: {deliveryDate}</p>
        <i>Vous serez averti par email si votre client commande vos pièces</i>
      </div>
      <div className={styles.modalFooter}>
        <button onClick={onConfirm} className={styles.modalClose}>
          Voir les autres recherches
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
