import { ContactsListItem } from "components/ContactListItms/ContactsListItem"
import { ContactListStyle } from "./ContactList.styled"
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";

export const ContactList = () => {
    const filterContacts = useSelector(selectVisibleContacts)

    return (
        <>
        {filterContacts.length  ? (
            <ContactListStyle>
            {filterContacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                />      
            ))}
        </ContactListStyle>
        ) : (
            <p>Contact list is empty, please add contacts!</p>
        )}
        </>

       
    )
}