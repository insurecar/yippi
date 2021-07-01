import { h } from 'preact'
import { useEffect, useRef } from 'preact/compat'
import intlTelInput from 'intl-tel-input'

const PhoneInput = ({ form, field, ...props }) => {
  const phoneInput = useRef()

  useEffect(() => {
    const iti = intlTelInput(phoneInput.current, {
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.5/js/utils.js',
      autoHideDialCode: null,
      nationalMode: null,
      preferredCountries: ['no', 'gb']
    })

    return () => iti.destroy()
  }, [phoneInput.current])

  return (
    <div>
      <input ref={phoneInput} type="tel" {...field} {...props} />
    </div>
  )
}

export default PhoneInput
