import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise =  loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Donate = () => {
    
    function submitCheckout(e) {
        e.preventDefault();
        console.log("attempting checkout");
        const donationAmount = parseInt(document.querySelector(".donation-amount").value);
        console.log(donationAmount)
        getCheckout({
            variables: {amount: donationAmount} 
        });
    }
    
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({sessionId: data.checkout.session});
            })
        }
    }, [data])

    return (
        <div className="container min-height">
            <div className="row justify-content-evenly">
                
                <div className="col-lg-3 col-sm-12">
                    <h2>We appreciate any donations!</h2>
                    <p>Any donations will go to support research toward the treatment, prevention, and curing of VAMP2 disorder as well as the annual fishing tournament</p>
                    <p>We use the Stripe payment system and all transactions are fully encrypted and anonymized. Additionally, all donations are tax deductible. We appreciate your support for a worthy cause!</p>
                </div>

                <div className="col-lg-6 col-sm-12">
                <form id="donate-form">
                    <label for="name" className="form-label">First and Last Name</label>
                    <input type="input" className="form-control mb-3"></input>
                    
                    <label for="address" className="form-label">Enter Home Address</label>
                    <input type="input" className="form-control mb-3"></input>
                    
                    <label for="zip" className="form-label">Zip Code</label>
                    <input type="input" className="form-control mb-3"></input>

                    <label for="cc" className="form-label">Enter Credit Card Number</label>
                    <input type="input" className="form-control mb-3"></input>

                    <label for="cvv" className="form-label">Enter CVV Code</label>
                    <input type="input" className="form-control mb-3"></input>
                    
                    <label for="donation-amount" className="form-label">Select an amount to donate</label>
                    <select className="form-select mb-3 donation-amount">
                        <option selected></option>
                        <option value="5">$5.00</option>
                        <option value="10">$10.00</option>
                        <option value="20">$20.00</option>
                        <option value="25">$25.00</option>
                        <option value="50">$50.00</option>
                        <option value="100">$100.00</option>
                    </select>
                    <button type="submit" className="btn btn-primary" onClick={submitCheckout}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
  };
  
  export default Donate;
  