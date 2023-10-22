import Modal from 'react-modal';
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { FormSchema } from 'components/ContactForm/ContactForm';
import { FormContact, FormLabel, FormInput, FormError } from 'components/ContactForm/ContactForm.styled';
import { ModalBox, 
  ModalBtn, 
  ModalBtnBox } from './Modal.styled';

Modal.setAppElement('#root');
export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
};

export const ModalWindow = ({ isOpen, contact, onClose }) => {
    const initialValues = {
        id: contact.id,
        name: contact.name,
        number: contact.number,
      };
    
      const dispatch = useDispatch();

      return (
     <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={customStyles}>
            <ModalBox>
            <h2>Edit Contact</h2>
               <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  dispatch(editContact(values));
                  onClose();
              }} 
                >
               <FormContact>
                <div>
                <FormLabel>Name</FormLabel>
                <FormInput type="text" name="name" placeholder="Enter name"/>
                <FormError name="name" component="div" />
                </div>
                 <div>
                 <FormLabel>Number</FormLabel>
                <FormInput type="tel" name="number" placeholder="Enter phone"/>
                <FormError name="number" component="div" />
                </div>
                <ModalBtnBox>
               <ModalBtn type="submit">Change</ModalBtn>
               <ModalBtn onClick={onClose}>Cansel</ModalBtn>              
              </ModalBtnBox>
            </FormContact> 
                </Formik>
              </ModalBox>
        </Modal>
      );
    }