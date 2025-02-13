import { useState } from "react"
import { useForm } from "react-hook-form"

function ReactHookForm() {

    const [registerFormData , setRegisterFormData] = useState([])
    const {register , handleSubmit , formState: {errors} ,reset} = useForm()

    function onSubmitForm(formData){
          console.log(formData);
          setRegisterFormData([
            ...registerFormData,
            formData
          ])
          reset()
    }
  return (
    <div className="p-4">
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label>Email</label>
                <input {...register('email', {
                    required: true
                })} className="border ml-3" type="email" name="email" />
                {
                    errors.email && errors.email.type === 'required' ?
                    <h1 className="text-red-700">Email is required</h1> : null
                }
            </div>
            <div>
                <label>Password</label>
                <input {...register('password',{
                    required: true,
                    minLength:8
                })} className="border ml-3" type="password" name="password" /> 
                {
                    errors.password && errors.password.type === 'required' ?
                    <h1 className="text-red-700">password is required</h1> : null
                }
                {
                    errors.password && errors.password.type === 'minLength' ?
                    <h1 className="text-red-700">password should have more than 8 charecters</h1> : null
                }
            </div>
            <button type="submit">submit</button>

            <div>
                {
                    registerFormData && registerFormData.length ?
                    registerFormData.map((data,index)=>
                    <div key={index}>
                        <h1>{data.email} is signed in</h1>
                    </div>
                    )
                    : null
                }
            </div>
        </form>
    </div>
  )
}

export default ReactHookForm