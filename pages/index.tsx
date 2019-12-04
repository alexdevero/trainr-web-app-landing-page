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

      <link rel='icon' href='/favicon.ico' />
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

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }

      .container {
        margin: auto;
        max-width: 1140px;
      }
    `}</style>
  </div>
)

export default Home
