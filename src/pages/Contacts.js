import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";
import { ContactsInfo,
    ContactsBox } from "./Contacts.styled";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <ContactsInfo>
        <ContactForm />
        <ContactsBox>
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading && <Loader/>}
        <ContactList />
        </ContactsBox>
      </ContactsInfo>
    );
  }