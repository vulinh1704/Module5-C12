import {Form, Formik, Field, ErrorMessage} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
const validateSchema = Yup.object().shape({
    id: Yup.number()
        .min(2, "Too Short!")
        .required("Required"),
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    description: Yup.string()
        .min(2,"Ngắn")
        .required("Required")
});
export function Create() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Create Student</h3>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    description: '',
                    action: ''
                }}
                validationSchema={validateSchema}
                onSubmit={(values, {resetForm}) => {
                    axios.post('http://localhost:3001/students', values).then(() => {
                        navigate('/home/list');
                    })
                }}
                // enableReinitialize={true}
            >
                <Form>
                    <Field type="text" name={'id'} placeholder={'Id'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'id'}/></p>
                    <Field type="text" name={'name'} placeholder={'Name'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'name'}/></p>
                    <Field type="text" name={'description'} placeholder={'Description'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'description'}/></p>
                    <Field as={'select'} name={'action'}    >
                        <option value="Xem xét"> Xem xét</option>
                        <option value="Đạt">Đạt</option>
                        <option value="Tốt">Tốt</option>
                    </Field>
                    <button type={'submit'}>Add</button>
                </Form>
            </Formik>

        </>
    )
}