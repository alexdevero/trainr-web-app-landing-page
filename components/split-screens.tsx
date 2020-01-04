import * as React from 'react'

const SplitScreens = () => (
  <section id="splitScreens" className="split-screens">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--dashboard.png" alt="" />
        </div>

        <div className="col-md-6">
          <h2 className="h4">Track & visualize your workouts</h2>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2 className="h4">Measure what matters</h2>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>
        </div>

        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--measurements.png" alt="" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img className="split__image" src="/images/trainr-app-snapshots/trainr--exercise-library.png" alt="" />
        </div>

        <div className="col-md-6">
          <h2 className="h4">Choose from hundreds of exercises</h2>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nostrum? Cupiditate laudantium explicabo consequuntur, atque iusto ducimus quia ipsum deleniti, esse doloribus vero.</p>
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

      .split__image {
        max-width: 100%;
        width: 100%;
        object-fit: contain;
      }
    `}</style>
  </section>
)

export default SplitScreens
