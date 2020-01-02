import * as React from 'react'

import { colors } from './../constants/theme'

interface PricingInterface {
  isBillingMonthly: boolean;
  selectedPlan: string;
  setIsBillingMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  handlePlanSelect: (pricingPlan: 'starter' | 'athlete' | 'beast' | 'coach') => void;
}

const Pricing = (props: PricingInterface) => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h1 className="h2 text-center">Pricing</h1>

        <div className="billing-switch__wrapper">
          <input type="checkbox" name="billingSwitch" id="billingSwitch" />

          <label
            className="billing-switch__label-el"
            htmlFor="billingSwitch"
            onClick={() => props.setIsBillingMonthly(!props.isBillingMonthly)}
          >
            <span className="billing-switch__label">Monthly</span>

            <span className="billing-switch__switch" />

            <span className="billing-switch__label">Yearly</span>
          </label>
        </div>

        <div className="row pricing-cards">
          <div className="col">
            <div className={props.selectedPlan === 'starter' ? 'pricing-card pricing-card--selected' : 'pricing-card'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name h3">Starter</h2>

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
            <div className={props.selectedPlan === 'athlete' ? 'pricing-card pricing-card--favorite pricing-card--selected' : 'pricing-card pricing-card--favorite'}>
              <div className="pricing-card__header">
                <h2 className="pricing-card__name h3">Athlete</h2>

                <p className="pricing-card__description">You are ready to take your game to the next level.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$29' : '$24'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                  <li>Workouts library</li>
                  <li>Caloric intake tracking</li>
                  <li>Water intake tracking</li>
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
                <h2 className="pricing-card__name h3">Beast</h2>

                <p className="pricing-card__description">You want a real challenge. You do The Seven, Murph, Fran and Filthy 50 as a warmup.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$79' : '$69'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                  <li>Workouts library</li>
                  <li>Caloric intake tracking</li>
                  <li>Water intake tracking</li>
                  <li>Exercise library</li>
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
                <h2 className="pricing-card__name h3">Box</h2>

                <p className="pricing-card__description">Best for coaches who want to register and work with trainees.</p>
              </div>

              <div className="pricing-card__body">
                <p className="pricing-card__price">
                  <span className="pricing-card__price-amount">{props.isBillingMonthly ? '$99' : '$84'}</span>
                  <span className="pricing-card__price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span>
                </p>

                <ul className="pricing-card__list">
                  <li>Body measurements tracking</li>
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                  <li>Workouts library</li>
                  <li>Caloric intake tracking</li>
                  <li>Water intake tracking</li>
                  <li>Exercise library</li>
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
      </div>

      <style jsx>{`
        .pricing {
          padding-top: 60px;
          padding-bottom: 60px;
        }

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

        .col + .col {
          margin-top: 32px;
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
            flex: 0 0 25%;
            max-width: 25%;
          }

          .col + .col {
            margin-top: 0;
          }
        }

        .billing-switch__wrapper {
          display: flex;
          justify-content: center;
        }

        .billing-switch__wrapper input {
          display: none;
          visibility: hidden;
        }

        .billing-switch__label-el {
          display: flex;
          cursor: pointer;
        }

        .billing-switch__label {
          font-size: 15px;
        }

        .billing-switch__switch {
          display: block;
          position: relative;
          margin-right: 8px;
          margin-left: 8px;
          width: 54px;
          height: 26px;
          border-radius: 45px;
          background: #fff;
          border: 1px solid #067df7;
          transition: background .25s ease-in-out;
        }

        .billing-switch__switch::before {
          position: absolute;
          top: 2px;
          left: 2px;
          z-index: 2;
          content: '';
          width: 20px;
          height: 20px;
          background: #067df7;
          border-radius: 50%;
          transition: transform .25s ease-in-out;
        }

        [type=checkbox]:checked + label > .billing-switch__switch::before {
          transform: translateX(28px);
        }

        .pricing-cards {
          margin-top: 21px;
        }

        .pricing-card {
          padding: 16px;
          border: 2px solid ${colors.gray};;
          border-radius: 4px;
        }

        .pricing-card--favorite {
          padding: 0 0 16px;
        }

        .pricing-card--favorite .pricing-card__name {
          padding-top: 16px;
          padding-right: 16px;
          padding-left: 16px;
          background: #f4f5f7;
        }

        .pricing-card--favorite .pricing-card__description,
        .pricing-card--favorite .pricing-card__body {
          padding-right: 16px;
          padding-left: 16px;
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
          margin-top: 16px;
          margin-bottom: 0;
          font-size: 15px;
        }

        .pricing-card__price {
          padding: 21px 0;
        }

        .pricing-card__price-amount {
          font-size: 40px;
        }

        .pricing-card__price-label {
          font-size: 14px;
        }

        .pricing-card__name {
          margin: 0;
          padding-bottom: 16px;
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
          margin-top: 10px;
        }

        .pricing-feature--muted {
          opacity: .45;
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
