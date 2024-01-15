import InputField from './InputField';
import { inputs } from '../constant';



const LoginPageView =({formik})=>{
return(
    <div className="login-page">
        <div className="container my-5">
            <h2 className="d-flex gap-3 justify-content-center align-items-center">
                <img height={60}
                className='rounded'
                 src="/public/pngcoin.png"/>
                <span>Coin Money Box</span>
            </h2>
            <form onSubmit={formik.handleSubmit}>
                {inputs.map((data)=>
                    <InputField formik={formik} data={data}/>

                )}

            
            
                <button>Gönder</button>
            </form>
        </div>
    </div>
)}
export default LoginPageView