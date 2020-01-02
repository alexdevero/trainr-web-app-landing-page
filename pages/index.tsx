import * as React from 'react'
import Head from 'next/head'

// Import components
import Benefits from '../components/benefits'
import Faq from '../components/faq'
import FeaturedIn from '../components/featured-in'
import Footer from '../components/footer'
import Hero from '../components/hero'
import HowItWorks from '../components/how-it-works'
import Nav from '../components/nav'
import Pricing from '../components/pricing'
import SignUp from '../components/sign-up'
import Testimonials from '../components/testimonials'

import { colors } from '../constants/theme'

const Home = () => {
  const [isBillingMonthly, setIsBillingMonthly] = React.useState(true)
  const [isSignUpVisible, setIsSignUpVisible] = React.useState(false)
  const [isSignUpMessageSuccessVisible, setIsSignUpMessageSuccessVisible] = React.useState(false)
  const [isSignUpMessageErrorVisible, setIsSignUpMessageErrorVisible] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState('')
  const [signUpEmail, setSignUpEmail] = React.useState('')

  const handlePlanSelect = (pricingPlan: 'starter' | 'athlete' | 'beast' | 'coach') => {
    console.log(pricingPlan)
    setSelectedPlan(pricingPlan)
    setIsSignUpVisible(true)
  }

  const handleSignUp = () => {
    console.log('click')
    // setIsSignUpVisible(false)

    if (signUpEmail.length > 0) {
      setIsSignUpMessageSuccessVisible(true)
      setIsSignUpMessageErrorVisible(false)
    } else {
      setIsSignUpMessageErrorVisible(true)
      setIsSignUpMessageSuccessVisible(false)
    }
  }

  return (
    <div className="page">
      <Head>
        <title>Trainr | Home</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="handheldFriendly" content="true" />
        {/* Maximum length 155 characters */}
        <meta name="description" content="" />
        <meta name="subject" content="Trainr | Home" />
        <meta name="language" content="English" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="classification" content="business" />
        <meta name="url" content="" />

        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="icon" type="image/png" href="" sizes="32x32" />
        <link rel="icon" type="image/png" href="" sizes="16x16" />
        <link rel="manifest" href="" />
        <link rel="mask-icon" href="" color="#111" />
        <link rel="shortcut icon" href="" />
        <meta name="msapplication-config" content="" />
        <meta name="theme-color" content="" />

        {/* Facebook OpenGraph tags */}
        <meta property="og:title" content="Trainr | Home" />
        <meta property="og:type" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:locale" content="" />
        <meta property="article:author" content="" />

        {/* Twitter cards tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="@alexdevero" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="Trainr | Home" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />

        {/* Disable automatic detection and formatting of possible phone numbers */}
        <meta name="format-detection" content="telephone=no" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=latin-ext" rel="stylesheet" />
      </Head>

      <Nav />

      <Hero />

      <Benefits />

      <HowItWorks />

      <Faq />

      <Pricing
        isBillingMonthly={isBillingMonthly}
        selectedPlan={selectedPlan}
        setIsBillingMonthly={setIsBillingMonthly}
        handlePlanSelect={handlePlanSelect}
      />

      {/* isSignUpVisible */ true && (
        <SignUp
          isSignUpMessageSuccessVisible={isSignUpMessageSuccessVisible}
          isSignUpMessageErrorVisible={isSignUpMessageErrorVisible}
          selectedPlan={selectedPlan}
          signUpEmail={signUpEmail}
          handleSignUpEmailChange={setSignUpEmail}
          handleSignUp={handleSignUp}
        />
      )}

      <Testimonials />

      <FeaturedIn />

      <Footer />

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          line-height: 1.618;
          letter-spacing: .4px;
          color: ${colors.textText};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          color: ${colors.textHeadings};
        }

        h1,
        .h1 {
          font-size: 48px;
        }

        h2,
        .h2 {
          font-size: 36px;
        }

        h3,
        .h3 {
          font-size: 24px;
        }

        h4,
        .h4 {
          font-size: 18px;
        }

        h5,
        .h5 {
          font-size: 16px;
        }

        p,
        .p {
          font-size: 16px;
        }

        button {
          font-family: inherit;
        }
      `}</style>
    </div>
  )
}

export default Home
