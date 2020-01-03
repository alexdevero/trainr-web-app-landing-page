import * as React from 'react'
import { ReactSVG } from 'react-svg'

const Benefits = () => (
  <section id="benefits" className="benefits">
    <div className="container text-center">
      <h1 className="h2">Why Trainr</h1>

      {/* <p>This is the Features/Benefits block. Write about your product or service.</p> */}

      <div className="row">
        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-tracking.svg"
            src="/images/features-icons/icon-flat-bars-chart.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Track your progress</h2>

          <p>Track your progress, PRs, weight, calories, water intake and more.</p>
        </div>

        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-workout.svg"
            src="/images/features-icons/icon-flat-notepad.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Log your workouts</h2>

          <p>Keep workouts logs so you can analyze them and improve your performance.</p>
        </div>

        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-leaderboard.svg"
            src="/images/features-icons/icon-flat-trophy.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Compete with others</h2>

          <p>Challenge yourself and see how you compare with other athletes.</p>
        </div>

        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-wods.svg"
            src="/images/features-icons/icon-flat-timer.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Dominate daily WODs</h2>

          <p>Challenge yourself, and push yourself, every day with selected WOD.</p>
        </div>

        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-exercise-library.svg"
            src="/images/features-icons/icon-flat-weight.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Choose from hundreds of exercises</h2>

          <p>Get inspired in a large library of exercises and challenge yourself.</p>
        </div>

        <div className="col">
          <ReactSVG
            // src="/images/features-icons/icon-fit.svg"
            src="/images/features-icons/icon-flat-biceps.svg"
            beforeInjection={svg => {
              svg.classList.add('benefits__icon')
              svg.setAttribute('style', 'width: 60px; height: auto; /* fill: #067df7; */')
            }}
          />

          <h2 className="h4">Get fit and have fun</h2>

          <p>Have fun while getting fit, pushing your body and mind to their limits.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .benefits {
        padding-top: 60px;
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

      .benefit__icon svg {
        max-width: 60px;
      }
    `}</style>
  </section>
)

export default Benefits
