import { Link } from 'react-router-dom'

export const ListItem = (props) => {

    const { name, id } = props.item;
    const { path } = props;

        return (
            <li><Link to = {`${path}/${id}`}>{name}</Link></li>
        );
};

export default ListItem;
