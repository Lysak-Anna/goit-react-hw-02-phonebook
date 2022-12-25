import PropTypes from 'prop-types';
import { Input, Div } from './Filter.styled';
import { CiSearch } from 'react-icons/ci';
export default function Filter({onChange}) {
    return (
        <Div>
            <CiSearch style={{ position: "absolute", zIndex: "5", top: "8", left: "8", color: "#535f80"}} />
          <Input placeholder="Search by name" type="text" onChange={onChange}></Input>
        </Div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}