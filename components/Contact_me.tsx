import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
}

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const Contact_me = ({ pageInfo }: Props) => {
  const { 
    register, 
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-5 mt-28'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. {" "}
          <span className='decoration-[#cbd5e1]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-5'>
          <div className='flex justify-center items-center space-x-5'>
            <PhoneIcon className="h-6 w-6 text-[#cbd5e1] animate-pulse" />
            <p className='text-2xl'>{pageInfo.phoneNumber}</p>
          </div>

          <div className='flex justify-center items-center space-x-5'>
            <EnvelopeIcon className="h-6 w-6 text-[#cbd5e1] animate-pulse" />
            <p className='text-2xl'>{pageInfo.email}</p>
          </div>

          <div className='flex justify-center items-center space-x-5'>
            <MapPinIcon className="h-6 w-6 text-[#cbd5e1] animate-pulse" />
            <p className='text-2xl'>{pageInfo.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
          <input {...register("name")} placeholder='Name' className='contactInput' type='text' />
          <input {...register("email")} placeholder='Email' className='contactInput' type='email' />
        </div>
        <input {...register("subject")} placeholder='Subject' className='contactInput' type='text' />
        <textarea {...register("message")} placeholder='Message' className='contactInput' />
        <button type='submit' className='bg-[#cbd5e1] transition-all duration-300 ease-in-out hover:bg-[#94a3b8] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact_me;