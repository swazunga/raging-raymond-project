const Donate = () => {
    return (
    
    <div className="row justify-content-evenly">
        
        <div className="col-lg-3 col-sm-12">
            <h2>We appreciate any donations!</h2>
            <p>Any donations will go to support research toward the treatment, prevention, and curing of VAMP2 disorder as well as the annual fishing tournament</p>
            <p>We use the Stripe payment system and all transactions are fully encrypted and anonymized. We appreciate your support for a worthy cause, and all donations are tax deductible.</p>
        </div>

        <div className="col-lg-6 col-sm-12">
        <form id="donate-form">
            <label for="name" className="form-label">First and Last Name</label>
            <input type="input" className="form-control mb-3"></input>
            
            <label for="address" className="form-label">Enter Home Address</label>
            <input type="input" className="form-control mb-3"></input>

            <label for="state" className="form-label">Select State</label>
            <select className="form-select mb-3">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            
            <label for="zip" className="form-label">Zip Code</label>
            <input type="input" className="form-control mb-3"></input>

            <label for="cc" className="form-label">Enter Credit Card Number</label>
            <input type="input" className="form-control mb-3"></input>

            <label for="cvv" className="form-label">Enter CVV Code</label>
            <input type="input" className="form-control mb-3"></input>
            
            <label for="donation-amount" className="form-label">Select an amount to donate</label>
            <select className="form-select mb-3">
                <option selected></option>
                <option value="5.00">$5.00</option>
                <option value="10.00">$10.00</option>
                <option value="20.00">$20.00</option>
                <option value="25.00">$25.00</option>
                <option value="50.00">$50.00</option>
                <option value="100.00">$100.00</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

    </div>
    
    );
  };
  
  export default Donate;
  