import { Formik , Form } from 'formik';
import * as Yup from 'yup';
import {TextField} from './TextField';

export const Signup = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:"",
    aggreeToTerms: false,
  }

  return (
   <Formik
   initialValues={initialValues}
   
   >
     {(formik) => (      
       <div>
       <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
       {/* {console.log(formik)} */}
       <Form>
         <TextField label="First Name" name="firstName" type="text" />
         <TextField label="Last Name" name="lastName" type="text" />
         <TextField label="Email" name="email" type="email" />
         <TextField label="Password" name="password" type="password" />
         <TextField label="Confirm Password" name="confirmPassword" type="password" />
         <TextField label="I accept terms & conditions" name="aggreeToTerms" type="checkbox" />
         <button className="btn btn-dark mt-3">Register</button>
         <button className="btn btn-danger mt-3 ml-3">Reset</button>
       </Form>
       </div>
       
     )}
   </Formik>
  )
}
