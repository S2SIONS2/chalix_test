import './Board.css';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BoardList = ({
    id,
    brd_ext1,
    brd_ext2,
    brd_title,
    reg_datetime,
    upd_datetime,
}) => {        
    const nav = useNavigate();
    
    const onUpdate = (id) => {
        nav('/updateboard', {state: {id: id}})
    }

    return (
        <li className="BoardList" onClick={() => onUpdate(id)}>
            <div className='td td1'>
                {id}
            </div>
            <div className='td td6'>
                {brd_ext2}
            </div>
            <div className='td td6'>
                {brd_title}
            </div>
            <div className='td td2'>
                {   upd_datetime ? 
                    upd_datetime.substring(0, 10)
                    :
                    reg_datetime.substring(0, 10)
                }
            </div>
            <div className='td td2'>
                {brd_ext1}
            </div>
        </li>
    )
}

export default BoardList;