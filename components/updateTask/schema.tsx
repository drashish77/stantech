import * as yup from 'yup'

export const validationSchema = yup.object({
  id: yup.string(),
  name: yup.string().required('Task name is required'),
  status: yup.string().required('Status is required'),
  dueDate: yup.date().required('Due date is required'),
  createdAt: yup.date().default(() => new Date()),
})
