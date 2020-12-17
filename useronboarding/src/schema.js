import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('A name is required')
        .min(3, "name must be 3 characters long"),
    password: yup
        .string()
        .required("A password is required")
        .min(8, "your password must be 8 characters"),
    email: yup
        .string()
        .email('must be a valid email')
        .required('you must provide an email'),
    eula: yup
        .boolean()
        .oneOf([true], "you must accept the terms and conditions")
})