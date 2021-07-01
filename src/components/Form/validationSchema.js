import * as Yup from 'yup'

export default Yup.object().shape({
  fullName: Yup.string().required('This field is required'),
  email: Yup.string().when('contactByMail', {
    is: true,
    then: Yup.string()
      .email('Should be valid email')
      .required('This field is required')
  }),
  phoneNumber: Yup.string()
    .when('contactByPhone', {
      is: true,
      then: Yup.string()
        .min(5, 'This field is required')
        .required('This field is required')
    })
    .when('contactBySMS', {
      is: true,
      then: Yup.string()
        .min(5, 'This field is required')
        .required('This field is required')
    }),
  contactTime: Yup.string().when('contactOtherTime', {
    is: true,
    then: Yup.string().required('This field is required')
  }),
  contactByPhone: Yup.boolean(),
  contactBySMS: Yup.boolean(),
  contactByMail: Yup.boolean(),
  contactDuringTheDay: Yup.boolean(),
  contactDuringTheEvening: Yup.boolean(),
  contactOtherTime: Yup.boolean(),
  terms: Yup.boolean()
    .required('Terms of conditions must be accepted')
    .oneOf([true], 'Terms of conditions must be accepted')
})
