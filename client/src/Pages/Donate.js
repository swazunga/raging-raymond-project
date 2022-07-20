import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import Hero from "../components/Hero";

const stripePromise =  loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Donate = () => {
    
    function submitCheckout(e) {
        e.preventDefault();
        
        const donationAmount = parseInt(document.querySelector(".donation-amount").value);
        const donorName = document.querySelector(".donor-name").value;

        getCheckout({
            variables: {amount: donationAmount, name: donorName}
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
        <>
        <Hero/>
        <div className="container min-height">
            <div className="row justify-content-evenly">
                
                <div className="col-lg-3 col-sm-12">
                    <h2>We appreciate any donations!</h2>
                    <p>Any donations will go to support research toward the treatment, research, and cure for VAMP2 disorder as well as the annual fishing tournament</p>
                    <p>We use the Stripe payment system and all transactions are fully encrypted and anonymized. Additionally, all donations are tax deductible. We appreciate your support for a worthy cause!</p>
                </div>

                <div className="col-lg-6 col-sm-12">
                <form id="donate-form">
                    <label htmlFor="name" className="form-label">First and Last Name</label>
                    <input type="input" className="form-control mb-3 donor-name"></input>                    

                    
                    <label htmlFor="donation-amount" className="form-label">Select an amount to donate</label>
                    <select className="form-select mb-3 donation-amount">
                        <option defaultValue={""}></option>
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
        </>
    );
  };
  
  export default Donate;
  