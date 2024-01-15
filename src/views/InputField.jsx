import { Formik, Form, Field } from 'formik';

const InputField =({formik, data})=>{
    const {label, name, type} = data
        return (
    <div className={formik.touched[name] && formik.errors[name] && "error"}>
                        <label>{label}</label>
                        <input 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type={type}
                        name={name} 
                        className='form-control mt-2'
                        />
                        <span>{formik.errors[name]}</span>
                    </div>
                    )
    }
export default InputField