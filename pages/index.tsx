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

const Home = () => (
  <div className="container">
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
    </Head>

    <Nav />

    <Hero />

    <Benefits />

    <HowItWorks />

    <Faq />

    <Pricing />

    <Testimonials />

    <FeaturedIn />

    <SignUp />

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
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
    `}</style>

    <style jsx>{`
      .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      }
    `}</style>
  </div>
)

export default Home
