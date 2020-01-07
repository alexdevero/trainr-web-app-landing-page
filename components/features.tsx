import * as React from 'react'
import { ReactSVG } from 'react-svg'

const Features = () => (
  <section id="features" className="features">
    <div className="container text-center">
      {/* <h1 className="h2 text-center">Features/Benefits List</h1> */}

      {/* <p className="text-center">This is the Features/Benefits block. Write about your product or service.</p> */}

      <div className="row">
        <div className="col col-4">
          <ReactSVG
            src="/images/features-icons/icon-flat-check-1.svg"
            beforeInjection={svg => {
              svg.classList.add('features__icon')
              svg.setAttribute('style', 'width: 60px; height: auto;')
            }}
          />

          <h3 className="h4">Simple</h3>

          <p>No experience with CrossFit or tracking required. We'll set you up with everything you need and help you start.</p>
        </div>

        <div className="col col-4">
          <ReactSVG
            src="/images/features-icons/icon-flat-target.svg"
            beforeInjection={svg => {
              svg.classList.add('features__icon')
              svg.setAttribute('style', 'width: 60px; height: auto;')
            }}
          />

          <h3 className="h4">Effective</h3>

          <p>A simple dashboard and helpful graphs make it easy to track and improve your progress, performance and fitness.</p>
        </div>

        <div className="col col-4">
          <ReactSVG
            src="/images/features-icons/icon-flat-trophy-1.svg"
            beforeInjection={svg => {
              svg.classList.add('features__icon')
              svg.setAttribute('style', 'width: 60px; height: auto;')
            }}
          />

          <h3 className="h4">Rewarding</h3>

          <p>Making progress every week feels great! You'll get into the habit quickly when you see the results.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .features {
        padding-bottom: 60px;
      }

      .col {
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
      }

      .col + .col {
        margin-top: 48px;
      }

      @media (min-width: 768px) {
        .col {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col + .col:nth-child(2) {
          margin-top: 0;
        }
      }

      @media (min-width: 992px) {
        .col {
          flex: 0 0 33.3333%;
          max-width: 33.3333%;
        }

        .col + .col:nth-child(3) {
          margin-top: 0;
        }
      }
    `}</style>
  </section>
)

export default Features
