export default function TipCalculator() {
  /*
  Bill

      Select Tip %
      5%
      10%
      15%
      25%
      50%
      Custom

      Number of People

      Tip Amount
      / person

      Total
      / person

      Reset
      */

  return (
    <div className="parent-container">
      <header>
        splitter
      </header>
      <main>
        <fieldset>
          <label></label>
          <input />
        </fieldset>

        <fieldset>
          <label></label>
        </fieldset>

        <fieldset>
          <label></label>
          <input />
        </fieldset>

        <section>
          <div>
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <div>
              $4.27
            </div>
          </div>

          <div>
            <div>
              <p>Total</p>
              <p>/ person</p>
            </div>
            <div>
              $32.79
            </div>
          </div>
        </section>
      </main>
      
      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  )
}