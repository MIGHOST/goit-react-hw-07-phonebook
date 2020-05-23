import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string()
      .min(2, 'Is to small name')
      .max(35, 'Is to long')
      .required('Required'),
    number: yup.number()
      .min(555555, 'Must be longer than 6 characters')
      .required('Required'),
  });
  
  export default schema;