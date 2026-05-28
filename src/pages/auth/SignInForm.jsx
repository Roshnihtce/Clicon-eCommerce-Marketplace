import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  Eye,
  EyeSlash,
  ArrowRight,
} from 'react-bootstrap-icons'

import googleIcon from '../../assets/logo&icons/Google.svg'

import appleIcon from '../../assets/logo&icons/Apple.svg'

export default function SignInForm() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] =
    useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const defaultUser = {
      email: 'admin@gmail.com',
      password: 'admin123',
      name: 'Admin',
    }


    // CHECK DEFAULT USER
    if (
      formData.email === defaultUser.email &&
      formData.password === defaultUser.password
    ) {
      sessionStorage.setItem(
        'isLogin',
        JSON.stringify(true)
      )

      sessionStorage.setItem(
        'currentUser',
        JSON.stringify(defaultUser)
      )

      alert('Login Successful')

      navigate('/dashboard')

      return
    }

    const storedUser = JSON.parse(
      localStorage.getItem('user')
    )

    if (!storedUser) {
      alert(
        'No user found. Please signup first.'
      )

      return
    }

    if (
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      sessionStorage.setItem(
        'isLogin',
        JSON.stringify(true)
      )

      sessionStorage.setItem(
        'currentUser',
        JSON.stringify(storedUser)
      )

      alert('Login Successful')

      navigate('/dashboard')
    } else {
      alert('Invalid Email or Password')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* EMAIL */}

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* PASSWORD */}

        <div className="form-group password-group">
          <div className="password-label">
            <label>Password</label>

            <span className="forgot-password">
              Forget Password
            </span>
          </div>

          <div className="password-input">
            <input
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <EyeSlash />
              ) : (
                <Eye />
              )}
            </button>
          </div>
        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="signin-btn"
        >
          SIGN IN

          <ArrowRight />
        </button>
      </form>

      {/* DIVIDER */}

      <div className="divider">
        <span>or</span>
      </div>

      {/* SOCIAL LOGIN */}

      <div className="social-login">
        <button type="button">
          <img
            src={googleIcon}
            alt="google"
          />

          <span>
            Login with Google
          </span>
        </button>

        <button type="button">
          <img
            src={appleIcon}
            alt="apple"
          />

          <span>
            Login with Apple
          </span>
        </button>
      </div>
    </>
  )
}