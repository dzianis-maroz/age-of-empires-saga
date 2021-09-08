import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_GET_DATA } from '../redux/actions';
import { DataList } from './DataList';

export const DataBlock = (props) => {

    const { path, title, selector } = props;

    const dispach = useDispatch();
    const { [title]: data } = useSelector(selector);

    useEffect(() => {

        if(!data) {
            dispach(ACTION_GET_DATA(path.listPath));
        } else {
            return data;
        }  
    }, []);

    return(
        <>
            {Boolean(data) && <DataList data = {data} path = {path.infoPath}/>}
        </>
    );
};

export default DataBlock;

