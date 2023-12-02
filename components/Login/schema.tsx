import * as yup from 'yup'

export const formSchema = yup.object().shape({
  email: yup.string().required('The username is required'),
  password: yup.string().required('The password is required'),
})
