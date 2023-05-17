import {useParams, useSearchParams} from "react-router-dom";

export function Edit() {
    let {id} = useParams();
    const [searchParams] = useSearchParams();
    return (
        <>
            <div>
                <h3>Đây là edit {id}</h3>
                <input type="text" name={'id'} placeholder={'Id'}/>
                <input type="text" name={'name'} placeholder={'Name'}/>
                <input type="text" name={'description'} placeholder={'Description'}/>
                <select name={'description'} placeholder={'Description'}>
                    <option value="Xem xét">Xem xét</option>
                    <option value="Đạt">Đạt</option>
                    <option value="Tốt">Tốt</option>
                </select>
                <button>Thêm mới</button>
            </div>
        </>
    )
}