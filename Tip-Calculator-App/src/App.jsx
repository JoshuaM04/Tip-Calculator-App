import { useState } from 'react';

function CalculateTip(props) {
  let tip = props.tip;
  let bill = props.bill;
  let customTip = props.customTip;
  let quantity = props.quantity;
  let tipAmount = props.tipAmount;

  if (tip === undefined) {
    tipAmount = (bill * tip) / quantity;
  } else {
    tipAmount = (bill * customTip) / quantity;
  }

  // Why is this an [object object]?
  console.log("Bill Amount");
  console.log(bill);

  return tipAmount;
}

function CalculateTotal(props) {
  let bill = props.bill;
  let quantity = props.quantity;
  let tipAmount = props.tipAmount;
  let total = props.total;

  total = (bill / quantity) + tipAmount;

}

export default function TipCalculator() {
  const tipValues = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState();
  const [activeTip, setActiveTip] = useState(undefined);
  const [customTip, setCustomTip] = useState(undefined);
  const [quantity, setQuantity] = useState();
  const [tipAmount, setTipAmount] = useState();
  const [total, setTotal] = useState();

  return (
    <div className="parent-container grid grid-rows-[150px_1fr] grid-cols-1 gap-5 min-h-screen min-w-[375px] min-w-screen box-border">
      <header className="text-3xl flex items-center justify-center text-slate-500 uppercase font-medium tracking-[.5rem] p-[20px]">
        splitter
      </header>

      <main className="bg-white grid auto-rows-min grid-cols-1 gap-10 rounded-t-4xl w-full min-h-auto p-[40px]">
        <fieldset>
          <label htmlFor="bill-amount" className="font-bold tracking-widest text-md text-slate-500">Bill</label>
          <br />
          <input id="bill-amount" type="text" 
                 className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-dollar.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" 
                 onChange={(event) => setBill(event.target.value)}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <p className="font-bold tracking-widest text-md text-slate-500">Select Tip %</p>
          <section className="grid grid-rows-3 grid-cols-2 gap-5">
            {
              tipValues.map((item, index) => {
                return (
                  <button key={index} onClick={(event) => setActiveTip(event.target.value)} className="bg-teal-900 rounded-sm w-full p-[10px] font-bold text-xl text-white hover:cursor-pointer hover:bg-teal-800 active:bg-teal-500 active:text-teal-900">{item}%</button>
                )
              })
            }
            <input placeholder="Custom" type="text" 
                   className="bg-gray-100 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 placeholder:text-center text-center" 
                   onChange={(event) => setCustomTip(event.target.value)}
            />
          </section>
        </fieldset>

        <fieldset>
          <label htmlFor="people-amount" className="font-bold tracking-widest text-md text-slate-500">Number of People</label>
          <input id="people-amount" type="text" 
                 className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-person.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold" 
                 onChange={(event) => setQuantity(event.target.value)}
          />
        </fieldset>

        <section className="bg-teal-800 rounded-xl p-[20px] place-self-end w-full flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Tip Amount</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-3xl text-teal-500 font-bold">
                <CalculateTip
                  bill={{bill}}
                  tip={{activeTip}}
                  customTip={{customTip}}
                  quantity={{quantity}}
                  tipAmount={{tipAmount}}
                />
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-medium">Total</p>
              <p className="text-slate-400">/ person</p>
            </div>
            <div>
              <p className="text-3xl text-teal-500 font-bold">
                <CalculateTotal
                  bill={{bill}}
                  quantity={{quantity}}
                  tipAmount={{tipAmount}}
                  total={{total}}
                />
              </p>
            </div>
          </div>

          <button className="uppercase bg-teal-500 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 hover:cursor-pointer hover:bg-teal-400 active:bg-teal-300 active:text-white">reset</button>
        </section>

        <footer className="attribution fixed bottom-0 mb-[10px] text-center w-[250px] place-self-center font-medium text-teal-900">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="font-medium text-blue-600">Frontend Mentor</span></a>. 
          Coded by <a href="#"><span className="font-medium text-blue-600" target="_blank">Joshua Martinez</span></a>.
        </footer>
      </main>
    </div>
  )
}