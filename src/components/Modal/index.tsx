import styles from './styles.module.css';

type ConfirmModalProps = {
  title?: string;
  message: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal = ({
  title = 'Confirmação',
  message,
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={styles.actions}>
          <button
            onClick={onCancel}
            className={`${styles.cancel} cancelButton`}
            data-testid='cancelButton'
            aria-label='Cancelar apagar histórico'
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className={`${styles.confirm} confirmButton`}
            data-testid='confirmButton'
            aria-label='Confirmar apagar histórico'
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
