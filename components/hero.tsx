import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ReactSVG } from 'react-svg'

import { colors } from '../constants/theme'

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="hero__content">
            <h1 className="hero__title">Train harder and smarter</h1>
            {/* Take your performance to the next level */}

            <h2 className="hero__subtitle">Trainr helps you plan, track, improve and sustain your training progress.</h2>
            {/* Beginner or advanced, Trainr gives you with the tools and knowledge you need to crush CrossFit Leaderboard. */}
            {/* If you are a beginner Trainr will help you get started with CrossFit. If you are experienced athlete, Trainr will help you up your game. */}

            <AnchorLink offset="70%" href="#intro"><span className="hero__cta">Learn more</span></AnchorLink>
          </div>
        </div>

        <div className="col-6">
          <ReactSVG
            src="/images/illustrations/man-flipping-tire--no-background.svg"
            beforeInjection={svg => {
              svg.classList.add('hero__illustration')
              svg.setAttribute('style', 'width: 100%; max-width: 520px; height: auto;')
            }}
          />
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
        min-height: 760px;
        max-height: 100vh;
        /* object-fit: cover;
        background-image: url('/images/hero-barbell-1.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed; */
      }

      /* .hero::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.75);
      } */

      .row {
        justify-content: center;
      }

      [class*=col-] {
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
      }

      .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .col-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      }

      /* .hero__content {
        text-align: center;
      } */

      .hero__title,
      .hero__subtitle {
        margin-top: 0;
        /* color: #fff; */
      }

      .hero__title {
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 48px;
        font-weight: 500;
      }

      .hero__subtitle {
        margin-bottom: 32px;
        font-size: 32px;
        font-weight: 300;
      }

      .hero__cta {
        display: inline-block;
        padding: 12px 28px;
        margin: 28px auto 0;
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        color: ${colors.white};
        background: ${colors.primary};
        border: 0;
        border-radius: 4px;
        cursor: pointer;
      }
    `}</style>
  </section>
)

export default Hero
