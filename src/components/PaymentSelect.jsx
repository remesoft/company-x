import React from "react";
import serviceImg from "../assets/images/service.webp";
import { Link } from "react-router-dom";
import paypalLogo from "../assets/paypal.png";
export default function PaymentSelect() {
  return (
    <>
      <section className="mx-auto w-4/5 gap-4 py-12 md:grid md:grid-cols-[30%_70%]">
        {/* Order Summary */}
        <div>
          <h2 className="mb-4 text-black text-xl font-bold">Order Summary</h2>
          <div className="flex flex-col border rounded p-4">

            <div className="flex gap-4 mb-4">
              <img className="h-10 w-20" src={serviceImg} alt="" />
              <div>
                <h4 className="text-black">I will narate and or produce your audiobook in spanish</h4>
                <p className="text-sm text-black">Change Service</p>
              </div>
            </div>

            <div className="flex mb-4 flex-col border-b">
              <div className="flex justify-between mb-4">
                <span>Basic Price</span>
                <span>$100</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>$100</span>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>$100</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Delivery Time</span>
                <span>10 days</span>
              </div>
            </div>

          </div>
        </div>

        {/* Payment Method */}
        <div className="flex flex-col p-4">
          <h2 className="mb-4 text-black text-xl font-bold">Payment Method</h2>
          <div>
            <div className="border mb-4 p-4">
            <input type="radio" name="payment" id="payment" className="hidden" />
            <label htmlFor="payment">
                <img className="h-6 inline-block bg-blue-500 mr-2 test-white" src={paypalLogo} alt="" />
                Pay with Paypal</label>
            </div>
            <div className="border mb-4 p-4">
            <input type="radio" name="payment" id="payment" className="hidden" />
            <label htmlFor="payment">
                <img className="h-6 inline-block bg-blue-500 mr-2 test-white" src={paypalLogo} alt="" />
                Pay with Paypal</label>
            </div>
            <div className="border mb-4 p-4">
            <input type="radio" name="payment" id="payment" className="hidden" />
            <label htmlFor="payment">
                <img className="h-6 inline-block bg-blue-500 mr-2 test-white" src={paypalLogo} alt="" />
                Pay with Paypal</label>
            </div>
            <div className="border mb-4 p-4">
            <input type="radio" name="payment" id="payment" className="hidden" />
            <label htmlFor="payment">
                <img className="h-6 inline-block bg-blue-500 mr-2 test-white" src={paypalLogo} alt="" />
                Pay with Paypal</label>
            </div>
            

          </div>
          <p className="mb-4">Please read <Link to="#" className="text-blue-600">Terms and Conditions</Link> first</p>
          <button className="inline-block w-28 bg-blue-600 text-white py-2 px-4 rounded-full">Pay Now</button>
        </div>
      </section>
    </>
  );
}
