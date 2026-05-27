import { useState } from 'react'

import {
  Eye,
  EyeSlash,
  ArrowRight,
} from 'react-bootstrap-icons'

import googleIcon from '../../assets/logo&icons/Google.svg'

import appleIcon from '../../assets/logo&icons/Apple.svg'

export default function SignUpForm() {
  const [showPassword, setShowPassword] =
    useState(false)

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    // PASSWORD MATCH CHECK

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert('Passwords do not match')

      return
    }

    // USER DATA

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    // LOCAL STORAGE

    localStorage.setItem(
      'user',
      JSON.stringify(userData)
    )

    // SESSION STORAGE

    sessionStorage.setItem(
      'isLogin',
      JSON.stringify(true)
    )

    sessionStorage.setItem(
      'currentUser',
      JSON.stringify(userData)
    )

    alert('Signup Successful')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* NAME */}

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* PASSWORD */}

        <div className="form-group password-group">
          <label>Password</label>

          <div className="password-input">
            <input
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              name="password"
              placeholder="Password"
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

        {/* CONFIRM PASSWORD */}

        <div className="form-group password-group">
          <label>Confirm Password</label>

          <div className="password-input">
            <input
              type={
                showConfirmPassword
                  ? 'text'
                  : 'password'
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                formData.confirmPassword
              }
              onChange={handleChange}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <EyeSlash />
              ) : (
                <Eye />
              )}
            </button>
          </div>
        </div>

        {/* TERMS */}

        <div className="terms-check">
          <input
            type="checkbox"
            required
          />

          <p>
            Are you agree to Clicon
            <span>
              {' '}
              Terms of Condition{' '}
            </span>
            and
            <span>
              {' '}
              Privacy Policy.
            </span>
          </p>
        </div>

        {/* SIGN UP BUTTON */}

        <button
          type="submit"
          className="signin-btn"
        >
          SIGN UP

          <ArrowRight />
        </button>
      </form>

      {/* DIVIDER */}

      <div className="divider">
        <span>or</span>
      </div>

      {/* SOCIAL LOGIN */}

      <div className="social-login">
        {/* GOOGLE */}

        <button type="button">
          <img
            src={googleIcon}
            alt="google"
          />

          <span>
            Sign up with Google
          </span>
        </button>

        {/* APPLE */}

        <button type="button">
          <img
            src={appleIcon}
            alt="apple"
          />

          <span>
            Sign up with Apple
          </span>
        </button>
      </div>
    </>
  )
}