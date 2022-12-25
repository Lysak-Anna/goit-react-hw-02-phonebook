import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineDeviceMobile, HiOutlineUser } from 'react-icons/hi';
import { Input } from 'components/Filter/Filter.styled';
import { Label } from './ContactForm.styled';
import { Button } from 'components/Wrapper/Wrapper.styled';
export default function ContactForm({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <Label>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Name'
          ></Input>
          <HiOutlineUser style={{position: "absolute", top: "4", left: "8", color: "#535f80"}}/>
        </Label>
        
        <Label>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Number'
          ></Input>
          <HiOutlineDeviceMobile style={{position: "absolute", top: "4", left: "8", color: "#535f80"}}/>
            </Label>
            <Button type="submit"><AiOutlineUserAdd style={ {width: "32px", height: "32px", color: "#051747"}} /></Button>
          </form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}