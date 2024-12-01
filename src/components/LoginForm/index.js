import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './index.css'
import { loginAPI , getUserInfoAPI} from '../../api_offline/api'

const LoginForm = () => {
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const onSubmitSuccess = async () => {
    const response = await getUserInfoAPI(formik.values.email)
    const data = await response.json()
    localStorage.setItem('userId', JSON.stringify(data.userId))
    localStorage.setItem('userName', JSON.stringify(data.userName))
    localStorage.setItem('userRole',JSON.stringify(data.userRole))
    history.replace('/')
  }

  const onSubmitFailure = (message) => {
    setShowSubmitError(true)
    setErrorMsg(message)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      const { email, password } = values
      const userDetails = { email, password }
     const stringifiedDetails = JSON.stringify(userDetails);
      const response = await loginAPI(stringifiedDetails)
      const data = await response.json()
      if (data.ok === true) {
        Cookies.set('jwt_token', data.jwtToken, { expires: 30 })
        onSubmitSuccess()
      } else {
        onSubmitFailure(data.error)
      }
    },
  })

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="email-input-filed"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error-message">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="password-input-filed"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error-message">{formik.errors.password}</p>
          ) : null}
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
        
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}

        <p className="signup-text">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
