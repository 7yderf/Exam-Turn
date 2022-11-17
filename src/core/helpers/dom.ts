import { Modal } from "bootstrap";

const hideModal = (modalEl: HTMLElement | null): void => {
  if (!modalEl) {
    return;
  }

  const myModal = Modal.getOrCreateInstance(modalEl);
  myModal.hide();
};

const showModal = (modalEl: HTMLElement | null): void => { 
  if (!modalEl) {
    return;
  }

  const myModal = Modal.getOrCreateInstance(modalEl);
  myModal.show();
};

const removeModalBackdrop = (): void => {
  if (document.querySelectorAll(".modal-backdrop.fade.show").length) {
    document.querySelectorAll(".modal-backdrop.fade.show").forEach((item) => {
      item.remove();
    });
  }
};

export { removeModalBackdrop, hideModal, showModal };