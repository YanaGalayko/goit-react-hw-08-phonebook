import { useDispatch } from "react-redux"
import { ListItems,
         ListText,
         ListBtn } from "./ContactsListItem.styled"
import { deleteContact } from "redux/contacts/operations"
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { useState } from "react";
import { ModalWindow } from "components/Modal/Modal";


export const ContactsListItem = ({contact: { id, name, number },}) => {
   const dispatch = useDispatch()

   const [modalIsOpen, setModalIsOpen] = useState(false)

   const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };;

return (
    <ListItems>
        <ListText>
            {name}   :   {number}
        </ListText>
        <ListBtn onClick={showModal}>
            <FaEdit size={18} color={'#464f54'}/>
            </ListBtn>
            {modalIsOpen && (
          <ModalWindow
            isOpen = {modalIsOpen}
            contact={{ id, name, number }}
          onClose={showModal}
        />
      )}
        <ListBtn onClick={() => dispatch(deleteContact(id))}>
            <AiFillDelete size={18} color={'#464f54'}/>
            </ListBtn>
    </ListItems>
)
}