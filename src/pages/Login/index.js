import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/images/appointment.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setLoading, emailPassSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const handleLogin = data => {
    const {email,password} = data;
    emailPassSignIn(email, password)
    .then(() => {
      navigate(from, {replace: true})
      setLoading(false)
    }).catch(()=> {})
    .finally(() => setLoading(false))
  };

  return (
    <div className='bg-cover bg-center bg-no-repeat h-[80vh] flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className='py-10 mx-auto md:w-[400px] shadow-lg px-6'>
        <h3 className='text-4xl font-bold text-[#19d3ae] text-center mb-8 uppercase'>Login</h3>
        <form onSubmit={handleSubmit(handleLogin)} className='space-y-3'>
          <div>
            <label htmlFor="email" className='text-white font-medium  pl-2'>Your Email Address</label>
            <input type="email" className="input input-bordered input-accent w-full bg-white"
              {...register('email', { required: 'Enter Your email address' })}
            />
            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="password" className='text-white font-medium  pl-2'>Your Password</label>
            <input type="password" className="input input-bordered input-accent w-full bg-white"
              {...register('password', { required: true })}
            />
            {errors.password && <span className='text-red-600'>Please Enter Your Password</span>}
            <label className='label  font-medium  pl-2'>Forget Password?</label>
          </div>

          <div className='text-center'>
            <button type='submit' className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300 block w-full mx-auto">Submit</button>
          </div>
        </form>
        <h1 className='text-center py-1'>New to doctors portal? <Link to={'/register'} className='text-success'>Create an account.</Link></h1>
        <div className="divider text-white">OR</div>

        <div className='text-center'>
          <button className="btn btn-outline btn-success  duration-300 block w-full mx-auto uppercase">Continue with google</button>
        </div>

      </div>
    </div>

  )
}

export default Login