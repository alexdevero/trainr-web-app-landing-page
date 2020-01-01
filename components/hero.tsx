import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="hero__content">
            <h1 className="hero__title">Take your performance to the next level</h1>

            <h2 className="hero__subtitle">Plan, track and sustain your training progress. Beginner or advanced, Trainr will provide you with the tools and knowledge you need to crush CrossFit Leaderboard.</h2>
            {/* If you are a beginner Trainr will help you get started with CrossFit. If you are experienced athlete, Trainr will help you up your game. */}

            <AnchorLink href="#pricing"><span className="hero__cta">Start Now</span></AnchorLink>
          </div>
        </div>

        <div className="col-6">
          <img src="" alt=""/>
        </div>
      </div>
    </div>

    <style jsx>{`
      .hero,
      .hero__content {
        position: relative;
        z-index: 2;
      }

      .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 880px;
        max-height: 100vh;
        overflow: hidden;
        object-fit: cover;
        background-image: url('/images/hero-barbell-1.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
      }

      .hero::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.75);
      }

      .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      }

      .hero__content {
        text-align: center;
        color: #fff;
      }


      .hero__title,
      .hero__subtitle {
        margin-top: 0;
      }

      .hero__title {
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 48px;
        font-weight: 700;
      }

      .hero__subtitle {
        margin-bottom: 32px;
        font-size: 32px;
        font-weight: 300;
      }

      .hero__cta {
        display: inline-block;
        padding: 16px 44px;
        font-weight: 700;
        text-decoration: none;
        color: #000;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 4px;
      }
    `}</style>
  </section>
)

export default Hero
