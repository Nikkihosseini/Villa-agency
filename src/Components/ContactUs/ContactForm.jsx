import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


export default function ContactForm(){

    const schema = yup.object().shape({
        name: yup.string().required("This Field Is Required."),
        email: yup.string().email('This Email Is Invalid.').required("This Field Is Required."),
        subject: yup.string().required("This Field Is Required."),
        textarea: yup.string().required("This Field Is Required.")
    })
    
    const {register , handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)})


    function onFormSubmit(data){
        console.log('Form Submited')
        console.log(data)
    }

    return(
    <>
         <div className='w-full mt-8 lg:mt-0 lg:w-[40%] p-6 bg-white rounded-[0.8rem] text-start text-gray-700 shadow-normal'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="name">Full Name</label><p className='inline text-red-600 ml-2 text-sm'>{errors.name?.message}</p>
                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='name' type="text" placeholder='Your Name...' {...register('name')}/>
                <label htmlFor="email">Email Address</label><p className='inline text-red-600 ml-2 text-sm'>{errors.email?.message}</p>
                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='email' type="text" placeholder='Your E-mail...' {...register('email')}/>
                <label htmlFor="subject">Subject</label><p className='inline text-red-600 ml-2 text-sm'>{errors.subject?.message}</p>
                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='subject' type="text" placeholder='Subject...' {...register('subject')}/>
                <label htmlFor="textarea">Message</label><p className='inline text-red-600 ml-2 text-sm'>{errors.textarea?.message}</p>
                <textarea className='block bg-gray-50 w-full mt-3 mb-12 focus:border-zinc-950 rounded-2xl px-5 pt-3 resize-y max-h-[12rem] min-h-[10rem]' name="textarea" id="textarea" placeholder='Your Message' {...register('textarea')}></textarea>
                <button className='font-semibold flex items-center justify-center w-[160px] h-[38px] sm:w-[170px]  sm:h-[45px] bg-zinc-950 text-white hover:bg-red-500 rounded-full transition-all cursor-pointer mx-auto sm:mx-0' type='submit' {...register('submit')}>Send Message</button>
            </form>
        </div>
    </>
    )
}