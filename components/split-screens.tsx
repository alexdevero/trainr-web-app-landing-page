import * as React from 'react'

const SplitScreens = () => (
  <section id="splitScreens" className="split-screens">
    <div className="container">
      <div className="row split__row">
        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--dashboard.png" alt="" />
        </div>

        <div className="col-md-6">
          <h2 className="h4">Track & measure what you need</h2>

          <p>Trainr helps you track everything, from your workouts and PRs to your weight, calories, water intake, supplements, and body measurements. You can also add your own custom trackers.</p>

          <p>You can preview all these data in various types of detailed and comprehensive graphs and visualization tools. This will help you find out where you can improve your performance.</p>
        </div>
      </div>

      <div className="row split__row">
        <div className="col-md-6">
          <h2 className="h4">Challenge yourself</h2>

          <p>Trainr has a big library of exercises for all body parts, equipment, you can choose from. This will help you keep challenging yourself and making continual progress.</p>

          <p>There are also pre-made workouts and daily WODs that will help you keep the bar high. If that's still not enough, you can also create your own workout routines.</p>
        </div>

        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--exercise-library.png" alt="" />
        </div>
      </div>

      <div className="row split__row">
        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--measurements.png" alt="" />
        </div>

        <div className="col-md-6">
          <h2 className="h4">Get fit and have fun</h2>

          <p>Whether you're a beginner, intermediate, or advanced, Trainr makes it easy to start with CrossFit and get fit. Most importantly, Trainr makes it easier to stay that way.</p>

          <p>Make Trainr your personal trainer, get better, faster and stronger, and achieve all your fitness and health goals.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .split-screens {
        padding-top: 90px;
        padding-bottom: 30px;
      }

      .row + .row {
        margin-top: 110px;
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
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-md-6 + .col-md-6:nth-child(2) {
          margin-top: 0;
        }
      }

      .split__row {
        align-itemS: center;
      }

      .split__image {
        max-width: 100%;
        width: 100%;
        object-fit: contain;
      }

      h2 {
        margin-top: 0;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </section>
)

export default SplitScreens
