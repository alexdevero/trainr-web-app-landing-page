import * as React from 'react'
import { ReactSVG } from 'react-svg'

const Intro = () => (
  <section id="intro" className="intro">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ReactSVG
            src="/images/illustrations/man-with-kettlebell--no-background.svg"
            beforeInjection={svg => {
              svg.classList.add('intro__icon')
              svg.setAttribute('style', 'width: 100%; max-width: 420px; height: auto;')
            }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="h2">Your No.1 CrossFit App</h1>

          <p>Whether your goal is:</p>

          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>Muscle Gain</li>
                <li>Weight Loss</li>
                <li>Competing at Games</li>
              </ul>
            </div>

            <div className="col-sm-6">
              <ul>
                <li>Increased Endurance</li>
                <li>Weight Maintenance</li>
                <li>Improved Health</li>
              </ul>
            </div>
          </div>

          <p>Train can help you. We're one of the top CrossFit apps in the world. Our app is designed to help you reach your peak performance, and achieve your fitness goals, faster.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .intro {
        padding-top: 30px;
        padding-bottom: 30px;
      }

      [class*=col-] {
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
      }

      [class*=col-] + [class*=col-] {
        margin-top: 32px;
      }

      @media (min-width: 576px) {
        .col-sm-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-sm-6 + .col-sm-6:nth-child(2) {
          margin-top: 0;
        }
      }

      @media (min-width: 768px) {
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-md-6 + .col:nth-child(2) {
          margin-top: 0;
        }
      }

      .h2 {
        margin-top: 0;
      }
    `}</style>
  </section>
)

export default Intro
