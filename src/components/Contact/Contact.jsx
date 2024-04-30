import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function Contact({ contacts: { name, number, id } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => setIsModalOpen(false);
  const onOpenModal = () => setIsModalOpen(true);

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    toast.success("Contact deleted successfully!");
  };

  return (
    <>
      <div>
        <p className={css.contactName}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.contactNumber}>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={onOpenModal}>
        Delete
      </button>
      {isModalOpen && (
        <div className={css.modal}>
          <p>Do you really want to delete contact?</p>
          <div className={css.btnWrap}>
            <button
              className={css.modalBtn}
              onClick={() => onDeleteContact(id)}
            >
              Yes
            </button>
            <button className={css.modalBtn} onClick={onCloseModal}>
              No
            </button>
          </div>
        </div>
      )}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: { duration: 2000 },
        }}
      />
    </>
  );
}

export default Contact;