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
    <div className="parent-container flex flex-col items-center justify-between min-h-screen min-w-screen bg-teal-100">
      <header className="text-3xl text-center text-slate-500 uppercase font-medium tracking-[.5rem] p-[20px]">
        <p>spli</p>
        <p>tter</p>
      </header>
      <main className="bg-white flex flex-col items-center gap-5 rounded-t-4xl w-full min-h-[1000px] p-[40px]">
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

        <footer className="attribution fixed bottom-[40px] text-center w-[250px]">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="font-medium text-blue-600">Frontend Mentor</span></a>. 
          Coded by <a href="#"><span className="font-medium text-blue-600" target="_blank">Joshua Martinez</span></a>.
        </footer>
      </main>
    </div>
  )
}