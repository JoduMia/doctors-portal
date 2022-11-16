import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/appointment.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {emailPassUserCreate, loading,setLoading,updateUser} = useContext(AuthContext);
  const handleLogin = (data) => {
    const {name,email, password} = data;
    emailPassUserCreate(email,password).then(result => {
        console.log(result.user);
        updateUser({displayName: name}).then(toast.success('User Created and Updated Successfully!!!'))
    })
  };

  return (
    <div className='bg-cover bg-center bg-no-repeat h-[80vh] flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className='py-10 mx-auto md:w-[400px] shadow-lg px-6'>
        <h3 className='text-4xl font-bold text-[#19d3ae] text-center mb-8 uppercase'>Register</h3>
        <form onSubmit={handleSubmit(handleLogin)} className='space-y-3'>

        <div>
            <label htmlFor="name" className='text-white font-medium  pl-2'>Your Name</label>
            <input type="text" className="input input-bordered input-accent w-full bg-white"
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-red-600'>Please Enter Name</span>}
          </div>

          <div>
            <label htmlFor="email" className='text-white font-medium  pl-2'>Your Email Address</label>
            <input type="email" className="input input-bordered input-accent w-full bg-white"
              {...register('email', { required: true })}
            />
            {errors.mail && <span className='text-red-600'>Please Enter Your email Address</span>}
          </div>

          <div>
            <label htmlFor="password" className='text-white font-medium  pl-2'>Your Password</label>
            <input type="password" className="input input-bordered input-accent w-full bg-white"
              {...register('password', { required: true })}
            />
            {errors.password && <span className='text-red-600'>Please Enter Your Password</span>}
          </div>

          <div className='text-center'>
            <button type='submit' className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:bg-gradient-to-l duration-300 block w-full mx-auto">Submit</button>
          </div>
        </form>
        <h1 className='text-center py-1'>Have an account? <Link to={'/login'} className='text-success'>Sign in</Link></h1>
        <div className="divider text-white">OR</div>

        <div className='text-center'>
          <button className="btn btn-outline btn-success  duration-300 block w-full mx-auto uppercase">Continue with google</button>
        </div>

      </div>
    </div>

  )
}

export default Register;