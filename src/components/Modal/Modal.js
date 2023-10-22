import Modal from 'react-modal';
import { 
    // ErrorMessage, Field, 
    Formik } from "formik";
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { FormSchema } from 'components/ContactForm/ContactForm';
import { FormContact, FormLabel, FormInput, FormError } from 'components/ContactForm/ContactForm.styled';
import { FcOk , FcCancel } from 'react-icons/fc';
import { ModalBox, ModalBtn, ModalBtnBox } from './Modal.styled';

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
    
      const handleSave = (values) => {
        dispatch(editContact(values));
        onClose();
        console.log(values);
    };
      return (
     <>
     <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={customStyles}>
            <ModalBox>
            <h2>Edit Contact</h2>
            <>
               <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={handleSave}
                >
               <FormContact>
              <FormLabel>
                    Name
                <FormInput type="text" name="name" placeholder="Enter name"/>
                <FormError name="name" component="div" />
              </FormLabel>
              <FormLabel>
                    Number
                <FormInput type="tel" name="number" placeholder="Enter phone"/>
                <FormError name="number" component="div" />
              </FormLabel>
    
            </FormContact> 
              
                </Formik>
            </>
            
                <ModalBtnBox>
               <ModalBtn type="submit"><FcOk size={20}/> save </ModalBtn>
               <ModalBtn onClick={onClose}><FcCancel size={20}/> cansel</ModalBtn>              
              </ModalBtnBox>
            </ModalBox>
        </Modal>
     </>
      );
    }