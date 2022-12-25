import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from "react-icons/ai";
import { Element, Image, Name, Number, Button } from './Item.styled';
export default function Item({ name, number, onClick, id }) {
    return (
        <Element >
            <Image>{name.slice(0, 1)}</Image>
            <div>
            <Name>{name}</Name> 
            <Number> {number}</Number>
            </div>
            <Button type="button" onClick={onClick} id={id}><AiOutlineUserDelete style={{height: "20px", width: "20px", color: "#e9322e"} } /></Button>
        </Element>
    )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}