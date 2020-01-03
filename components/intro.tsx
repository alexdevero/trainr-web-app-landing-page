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
              svg.setAttribute('style', 'width: 100%; max-width: 380px; height: auto;')
            }}
          />
        </div>

        <div className="col-md-6 col-content">
          <h1 className="h2">Your No.1 CrossFit App</h1>

          <p>Whether your goal is:</p>

          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Muscle Gain
                </li>

                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Weight Loss
                </li>

                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Competing at Games
                </li>
              </ul>
            </div>

            <div className="col-sm-6">
              <ul>
                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Increased Endurance
                </li>

                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Weight Maintenance
                </li>

                <li>
                  <ReactSVG
                    src="/images/ui-icons/icon-check-mark.svg"
                    beforeInjection={svg => {
                      svg.classList.add('intro__icon')
                      svg.setAttribute('style', 'margin-right: 8px; width: 12px; height: auto; fill: #067df7;')
                    }}
                  />
                  Improved Health
                </li>
              </ul>
            </div>
          </div>

          <p className="text-after-list">Train can help you. We're one of the top CrossFit apps in the world. Our app is designed to help you reach your peak performance, and achieve your fitness goals, faster.</p>
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

        .col-md-6 + .col-md-6:nth-child(2) {
          margin-top: 0;
        }
      }

      .col-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .h2 {
        margin-top: 0;
        margin-bottom: 28px;
      }

      p {
        margin-top: 0;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        list-style-type: none;
      }

      li + li {
        margin-top: 6px;
      }

      .text-after-list {
        margin-top: 21px;
      }
    `}</style>
  </section>
)

export default Intro
