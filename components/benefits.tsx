import * as React from 'react'

const Benefits = () => (
  <section id="benefits">
    <div className="container text-center">
      {/* <h1 className="h2">Features/Benefits List</h1> */}

      {/* <p>This is the Features/Benefits block. Write about your product or service.</p> */}

      <div className="row">
        <div className="col">
          <h2 className="h4">Track your progress</h2>

          <p>Track your progress, PRs, calories, measurements, water intake, weight and more.</p>
        </div>

        <div className="col">
          <h2 className="h4">Log your workouts</h2>

          <p>Keep workouts logs so you can analyze them and improve your performance.</p>
        </div>

        <div className="col">
          <h2 className="h4">Compete with others</h2>

          <p>Challenge yourself and see how you compare with other athletes.</p>
        </div>

        <div className="col">
          <h2 className="h4">Crush daily WODs</h2>

          <p>Challenge yourself every day with one of the selected WOD.</p>
        </div>

        <div className="col">
          <h2 className="h4">Get inspired in exercise library</h2>

          <p>Get inspired in a large library of exercises and challenge yourself with.</p>
        </div>

        <div className="col">
          <h2 className="h4">Have fun and get fit</h2>

          <p>Have fun while workout out, pushing your body and mind to their limits.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: -15px;
        margin-left: -15px;
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

      @media (min-width: 768px) {
        .col {
          flex: 0 0 50%;
          max-width: 50%;
        }

        [class*=col-] + [class*=col-]:nth-child(2) {
          margin-top: 0;
        }
      }

      @media (min-width: 992px) {
        .col {
          flex: 0 0 33.3333%;
          max-width: 33.3333%;
        }

        [class*=col-] + [class*=col-] {
          margin-top: 0;
        }
      }
    `}</style>
  </section>
)

export default Benefits
