import { useDispatch, useSelector } from "react-redux";
import { FilterText,
         FilterInputn } from "./ContactFilter.styled"
import { selectFilter } from "redux/contacts/selectors";
import { filterContacts } from "redux/contacts/filterSlice";


export const ContactFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
return (
    <>
        <FilterText>Find contacts by name</FilterText>
        <FilterInputn
        name="filter"
         type="text"
         value={filter}
         onChange={evt => dispatch(filterContacts(evt.target.value))}
         />
    </>
)
}