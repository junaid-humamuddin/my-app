import './Login.scss';
import logo from '../../assets/logo.svg';
import { ILoginForm } from '../../models/Profile';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../../common/FormInput';
import { FormButton } from '../../common/FormButton';
import { loginApi } from '../../api/login';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginForm>();
    const navigate = useNavigate();
    const formSubmit: SubmitHandler<ILoginForm> = ({ email, password }) => {
    loginApi({email, password}).then(res => {
        console.log('logged in successfully', res);
        navigate('/cars')
    }).catch(({ response = {} }) => console.log('Internal server error. Please try again later'))
    }

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit(formSubmit)} className='login-form'>
                <div className="topbar-logo">
                    <div className="logo"> <img src={logo} /></div>
                </div>
                <h2 className="title">Sign-In</h2>
                <div className="form-box">
                    <FormInput
                        label='Email Address'
                        name='email'
                        type='text'
                        placeholder='Email Address'
                        register={register}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Please enter valid Email Address',
                            },
                        }}
                        errors={errors}
                    />
                    <FormInput
                        label='Password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        register={register}
                        rules={{ required: 'Email is required' }}
                        errors={errors}
                    />
                    <div className='action'>
                        <FormButton type="submit">Login</FormButton>
                    </div>
                    <div className="sublink">Don't have an existing account? <a href="#">Register here</a></div>
                </div>
            </form>
        </div>
    )
};
export default Login;