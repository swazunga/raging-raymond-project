const Donate = () => {
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
                    <label htmlFor="name" className="form-label">First and Last Name</label>
                    <input type="input" className="form-control mb-3"></input>                    

                    
                    <label htmlFor="donation-amount" className="form-label">Select an amount to donate</label>
                    <select className="form-select mb-3">
                        <option defaultValue={""}></option>
                        <option value="5">$5.00</option>
                        <option value="10">$10.00</option>
                        <option value="20">$20.00</option>
                        <option value="25">$25.00</option>
                        <option value="50">$50.00</option>
                        <option value="100">$100.00</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
  };
  
  export default Donate;
  