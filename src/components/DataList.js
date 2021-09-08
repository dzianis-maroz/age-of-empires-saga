import { ListItem } from './ListItem';

export const DataList = (props) => {

    const { data, path } = props;

    return (
        <>
          <ul>
            {data.map(item =>
              <ListItem key = {item.id} item = {item} path = {path}/>
            )}
          </ul>
        </>   
    )
};

