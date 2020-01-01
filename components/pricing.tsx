import * as React from 'react'

import { colors } from './../constants/theme'

interface PricingInterface {
  isBillingMonthly: boolean;
  isModalVisible: boolean;
  isSignUpMessageSuccessVisible: boolean;
  isSignUpMessageErrorVisible: boolean;
  selectedPlan: string;
  setIsBillingMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlanSelect: (pricingPlan: 'starter' | 'athlete' | 'beast' | 'coach') => void;
  handleSignUp: () => void;
}

const Pricing = (props: PricingInterface) => {
  return (
    <section id="pricing">
      <div className="container">
        <h1>Pricing</h1>

        <div className="billing-switch">switch to <button className="billing-switch-link" onClick={() => props.setIsBillingMonthly(!props.isBillingMonthly)}>{props.isBillingMonthly ? 'yearly' : 'monthly'}</button></div>

        <div className="row pricing-cards">
          <div className="col">
            <div className={props.selectedPlan === 'starter' ? 'pricing-card pricing-card--selected' : 'pricing-card'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name">Starter</h2>

                <p className="pricing-card__description">You are new to CrossFit, or want to get started.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$19' : '$16'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                  <li>Workouts library</li>
                  <li className="pricing-feature--muted">Caloric intake tracking</li>
                  <li className="pricing-feature--muted">Water intake tracking</li>
                  <li className="pricing-feature--muted">Exercise library</li>
                  <li className="pricing-feature--muted">Custom workouts</li>
                  <li className="pricing-feature--muted">Supplement tracking</li>
                  <li className="pricing-feature--muted">Register and manage trainees</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button className="pricing-card__cta" onClick={() => props.handlePlanSelect('starter')}>Start with Starter</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={props.selectedPlan === 'athlete' ? 'pricing-card pricing-card--selected' : 'pricing-card'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name">Athlete</h2>

                <p className="pricing-card__description">You are ready to take your game to the next level.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$29' : '$24'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Water intake tracking</li>
                  <li>Daily WODs</li>
                  <li>Workouts library</li>
                  <li className="pricing-feature--muted">Exercise library</li>
                  <li className="pricing-feature--muted">Custom workouts</li>
                  <li className="pricing-feature--muted">Supplement tracking</li>
                  <li className="pricing-feature--muted">Register and manage trainees</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button className="pricing-card__cta" onClick={() => props.handlePlanSelect('athlete')}>Start with Athlete</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={props.selectedPlan === 'beast' ? 'pricing-card pricing-card--selected' : 'pricing-card'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name">Beast</h2>

                <p className="pricing-card__description">You are at the top. You do The Seven, Murph, Fran and Filthy 50 as a warmup.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$79' : '$69'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Water intake tracking</li>
                  <li>Daily WODs</li>
                  <li>Exercise library</li>
                  <li>Workouts library</li>
                  <li>Custom workouts</li>
                  <li>Supplement tracking</li>
                  <li className="pricing-feature--muted">Register and manage trainees</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button className="pricing-card__cta" onClick={() => props.handlePlanSelect('beast')}>Start with Beast</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={props.selectedPlan === 'coach' ? 'pricing-card pricing-card--selected' : 'pricing-card'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name">Box</h2>

                <p className="pricing-card__description">Best for coaches who want to register and work with trainees.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$99' : '$84'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Water intake tracking</li>
                  <li>Daily WODs</li>
                  <li>Exercise library</li>
                  <li>Workouts library</li>
                  <li>Custom workouts</li>
                  <li>Supplement tracking</li>
                  <li>Register and manage trainees</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button className="pricing-card__cta" onClick={() => props.handlePlanSelect('coach')}>Start with Coach</button>
              </div>
            </div>
          </div>
        </div>

        {props.isModalVisible && (
          <div>
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <input type="email" />
              </div>

              <div className="col-md-6 col-lg-5">
                <button onClick={props.handleSignUp}>Sign up</button>
              </div>
            </div>
          </div>
        )}
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
          margin-right: -15px;
          margin-left: -15px;
        }

        .col {
          position: relative;
          padding-right: 15px;
          padding-left: 15px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media (min-width: 992px) {
          .col {
            flex: 0 0 25%;
            max-width: 25%;
          }
        }

        h1,
        .billing-switch {
          text-align: center;
        }

        .billing-switch-link {
          padding: 0;
          font-size: 16px;
          text-decoration: underline;
          color: #222;
          background: transparent;
          border: 0;
          cursor: pointer;
          outline: 0;
        }

        .pricing-cards {
          margin-top: 21px;
        }

        .pricing-card {
          padding: 16px;
          border: 2px solid ${colors.gray};;
          border-radius: 4px;
        }

        .pricing-card--selected {
          border: 2px solid ${colors.primary};
        }

        .pricing-card__price,
        .pricing-card__name,
        .pricing-card__description {
          text-align: center;
        }

        .pricing-card__name,
        .pricing-card__price {
          margin: 0;
        }

        .pricing-card__description {
          margin-bottom: 0;
        }

        .pricing-card__price {
          padding: 21px 0;
        }

        .pricing-card__price-amount {
          font-size: 32px;
        }

        .pricing-card__price-label {
          font-size: 14px;
        }

        .pricing-card__name {
          margin: 0;
        }

        .pricing-card__list {
          padding: 0 0 0 16px;
          margin: 0;
        }

        .pricing-card__list li {
          font-size: 14px;
          list-style-type: none;
        }

        .pricing-card__list li + li {
          margin-top: 12px;
        }

        .pricing-feature--muted {
          color: rgba(0, 0, 0, .35);
        }

        .pricing-card__cta {
          display: flex;
          padding: 12px 28px;
          margin: 28px auto 0;
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
}

export default Pricing
