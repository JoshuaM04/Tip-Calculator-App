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
    <div className="parent-container grid grid-rows-[150px_1fr] grid-cols-1 gap-2 min-h-screen min-w-screen bg-teal-100 box-border">
      <header className="text-3xl flex items-center justify-center text-slate-500 uppercase font-medium tracking-[.5rem] p-[20px]">
        splitter
      </header>

      <main className="bg-white grid grid-rows-2 grid-cols-1 items-start rounded-t-4xl w-full p-[40px]">
        <form action="" className="grid grid-rows-3 grid-cols-1 gap-10">
          <fieldset>
            <label htmlFor="bill-amount" className="font-bold tracking-widest text-md text-slate-500">Bill</label>
            <br />
            <input id="bill-amount" type="text" className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-dollar.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" />
          </fieldset>

          <fieldset>
            <p className="font-bold tracking-widest text-md text-slate-500">Select Tip %</p>
          </fieldset>

          <fieldset>
            <label htmlFor="people-amount" className="font-bold tracking-widest text-md text-slate-500">Number of People</label>
            <input id="people-amount" type="text" className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-person.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" />
          </fieldset>
        </form>

        <section className="bg-teal-800 rounded-xl p-[20px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Tip Amount</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-2xl text-teal-500 font-bold">$4.27</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Total</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-2xl text-teal-500 font-bold">$32.79</p>
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