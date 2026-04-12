import { useState, useRef } from 'react';
import {calculateTip, calculateTotal} from './utils/helper.js';
import logo from './assets/images/logo.svg'

export default function TipCalculator() {
  const tipValues = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState('');
  const [activeTip, setActiveTip] = useState(0);
  const [customTip, setCustomTip] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  

  return (
    <div className="parent-container grid grid-rows-[150px_1fr] grid-cols-1 gap-5 min-h-screen min-w-[375px] min-w-screen bg-teal-100 box-border lg:flex lg:flex-col lg:items-center lg:justify-center">
      <header className="text-3xl flex items-center justify-center text-slate-500 uppercase font-medium tracking-[.5rem] p-[20px] lg:fixed lg:top-0 lg:mt-40">
        <img src={logo} alt="Splitter heading logo." />
      </header>

      <main className="bg-white grid auto-rows-min grid-cols-1 gap-10 rounded-t-4xl w-full min-h-auto p-[40px] lg:grid-cols-2 lg:auto-rows-min lg:h-fit lg:w-[1000px] shadow-xl lg:rounded-4xl">
        <div className="grid auto-rows-min grid-cols-1 gap-10">
          <fieldset>
            <label htmlFor="bill-amount" className="font-bold tracking-widest text-lg text-slate-500">Bill</label>
            <input id="bill-amount" type="text"
                   className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-dollar.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold"
                   onChange={(event) => setBill(event.target.value)}
                   value={bill}
            />
          </fieldset>
          <fieldset className="flex flex-col gap-5">
            <p className="font-bold tracking-widest text-lg text-slate-500">Select Tip %</p>
            <section className="grid grid-rows-3 grid-cols-2 gap-5 lg:grid-rows-2 lg:grid-cols-3">
              {
                tipValues.map((item, index) => {
                  return (
                    <button key={index} onClick={() => { setActiveTip(item); setCustomTip(''); }}
                      className={`rounded-sm w-full p-[10px] font-bold text-xl hover:cursor-pointer hover:bg-teal-500 ${activeTip === item ? 'bg-teal-500 text-teal-900' : 'bg-teal-900 text-white'}`}
                    >
                      {item}%
                    </button>
                  )
                })
              }
              <input placeholder="Custom" type="text"
                     id="custom-tip"
                     className="bg-gray-100 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 placeholder:text-center text-center"
                     onChange={(event) => { setCustomTip(event.target.value); setActiveTip(0); }}
                     value={customTip}
              />
            </section>
          </fieldset>
          <fieldset>
            <label htmlFor="people-amount" className="font-bold tracking-widest text-lg text-slate-500">Number of People</label>
            <input id="people-amount" type="text"
                   className="bg-gray-100 w-full rounded-sm min-h-[40px] bg-[url(assets/images/icon-person.svg)] bg-position-[center_left_20px] bg-no-repeat text-right p-[10px] text-teal-900 text-2xl font-bold"
                   onChange={(event) => setQuantity(event.target.value)}
                   value={quantity}
            />
          </fieldset>
        </div>

        <section className="bg-teal-800 rounded-xl p-[20px] place-self-end w-full flex flex-col gap-5 lg:h-full lg:justify-between lg:p-10">
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">Tip Amount</p>
                <p className="text-slate-400">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-teal-500 font-bold lg:text-4xl">
                  ${calculateTip(bill, activeTip, customTip, quantity, tipAmount)}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">Total</p>
                <p className="text-slate-400">/ person</p>
              </div>
              <div>
                <p className="text-3xl text-teal-500 font-bold lg:text-4xl">
                  ${calculateTotal(bill, quantity, tipAmount, total)}
                </p>
              </div>
            </div>
          </div>

          <button 
            className="uppercase bg-teal-500 rounded-sm w-full p-[10px] font-bold text-xl text-teal-900 hover:cursor-pointer hover:bg-teal-400 active:bg-teal-300 active:text-white"
            onClick={
              () => {
                setBill(''); 
                setCustomTip(''); 
                setQuantity(''); 
                setActiveTip(0);
              }
            }
          >
            reset
          </button>
        </section>

        <footer className="attribution relative bottom-0 mb-[10px] text-center w-[250px] place-self-center font-medium text-teal-900 lg:fixed lg:bottom-0">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="font-medium text-blue-600">Frontend Mentor</span></a>. 
          Coded by <a href="#"><span className="font-medium text-blue-600" target="_blank">Joshua Martinez</span></a>.
        </footer>
      </main>
    </div>
  )
}