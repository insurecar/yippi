import * as Yup from 'yup'
import { t } from 'ttag'

export default Yup.object().shape({
  fullName: Yup.string()
    .required(t`This field is required`),

  phoneNumber: Yup.string()
    .required(t`This field is required`),

  terms: Yup.boolean()
    .required(t`Terms of conditions must be accepted`)
    .oneOf([true], t`Terms of conditions must be accepted`)
}, [['fullName', 'phoneNumber']])
