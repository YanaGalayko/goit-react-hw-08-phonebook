import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        {/* <Helmet> */}
          <title>Contacts</title>
        {/* </Helmet> */}
        <ContactForm />
        <ContactFilter />
        <div>{isLoading && <Loader/>}</div>
        <ContactList />
      </>
    );
  }