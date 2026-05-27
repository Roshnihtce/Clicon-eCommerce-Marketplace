import { useState } from 'react'

import MainLayout from '../../layout/MainLayout'


import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'



export default function SignIn() {
  const [activeTab, setActiveTab] =
    useState('signin')

  return (
    <MainLayout>
      <section className="signin-page">
        <div className="signin-card">
          <div className="signin-header">
            <button
              className={
                activeTab === 'signin'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveTab('signin')
              }
            >
              Sign In
            </button>

            <button
              className={
                activeTab === 'signup'
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setActiveTab('signup')
              }
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'signin' ? (
            <SignInForm />
          ) : (
            <SignUpForm />
          )}
        </div>
      </section>
    </MainLayout>
  )
}