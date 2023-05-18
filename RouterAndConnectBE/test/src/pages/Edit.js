import {useParams, useSearchParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";

export function Edit() {
    const {id} = useParams();
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();
    console.log(searchParam.get('name'))
    console.log(id);
    return (
        <>
            <h1>Form Edit</h1>
            <div>
                <input type="text" name={'id'} placeholder={'Id'}/>
                <input type="text" name={'name'} placeholder={'Name'}/>
                <input type="text" name={'description'} placeholder={'Description'}/>
                <select name={'description'} placeholder={'Description'}>
                    <option value="Xem xét">Xem xét</option>
                    <option value="Đạt">Đạt</option>
                    <option value="Tốt">Tốt</option>
                </select>
                <button onClick={() => {
                    navigate('/home/list', {state: {name: 'Linh', age: 12}})
                }}>Edit
                </button>
            </div>
        </>
    )
}