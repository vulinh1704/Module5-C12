export function Add() {
    return (
        <>
            <h3>Thêm mới sản phầm</h3>
            <input type="text" name={'id'} placeholder={'id'}/>
            <input type="text" placeholder={'price'} name={'price'}/>
            <input type="text" placeholder={'description'}/>
            <input type="text" placeholder={'category'}/>
            <button>THêm mới</button>
        </>
    )
}