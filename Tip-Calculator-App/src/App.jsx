export default function TipCalculator() {
  const tipValues = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <div className="parent-container grid grid-rows-[150px_1fr] grid-cols-1 gap-5 min-h-screen min-w-screen bg-teal-100 box-border">
      <header className="text-3xl flex items-center justify-center text-slate-500 uppercase font-medium tracking-[.5rem] p-[20px]">
        splitter
      </header>

      <main className="bg-white grid auto-rows-min grid-cols-1 gap-10 rounded-t-4xl w-full min-h-auto p-[40px]">
        <fieldset>
          <label htmlFor="bill-amount" className="font-bold tracking-widest text-md text-slate-500">Bill</label>
          <br />
          <input id="bill-amount" type="text" className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-dollar.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" />
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <p className="font-bold tracking-widest text-md text-slate-500">Select Tip %</p>
          <section className="grid grid-rows-3 grid-cols-2 gap-5">
            {
              tipValues.map((item, index) => {
                return (
                  <button key={index} className="bg-teal-900 rounded-sm w-full p-[10px] font-bold text-xl text-white hover:cursor-pointer hover:bg-teal-800 active:bg-teal-500 active:text-teal-900">{item}</button>
                )
              })
            }
            <input placeholder="Custom" type="text" className="bg-gray-100 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 placeholder:text-center text-center" />
          </section>
        </fieldset>

        <fieldset>
          <label htmlFor="people-amount" className="font-bold tracking-widest text-md text-slate-500">Number of People</label>
          <input id="people-amount" type="text" className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-person.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" />
        </fieldset>

        <section className="bg-teal-800 rounded-xl p-[20px] place-self-end w-full flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Tip Amount</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-3xl text-teal-500 font-bold">$4.27</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Total</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-3xl text-teal-500 font-bold">$32.79</p>
            </div>
          </div>

          <button className="uppercase bg-teal-500 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 hover:cursor-pointer hover:bg-teal-400 active:bg-teal-300 active:text-white">reset</button>
        </section>

        <footer className="attribution text-center w-[250px] place-self-center font-medium text-teal-900">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="font-medium text-blue-600">Frontend Mentor</span></a>. 
          Coded by <a href="#"><span className="font-medium text-blue-600" target="_blank">Joshua Martinez</span></a>.
        </footer>
      </main>
    </div>
  )
}