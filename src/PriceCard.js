import { FaCheck, FaTimes } from "react-icons/fa";

export function PriceCard() {
  return (
    <div className="App">
      <div className="main_container">
        <div className="card_container">
          <div className="card_content">

            <h5 className=" text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="card-period">/month</span></h6>
            <hr></hr>
            <ul>
              <li><span className="icon"><FaCheck /></span>Single User</li>
              <li><span className="icon"><FaCheck /></span>5GB Storage</li>
              <li><span className="icon"><FaCheck /></span>Unlimited Public Projects</li>
              <li><span className="icon"><FaCheck /></span>Community Access</li>
              <li className="text-muted"><span className="icon"><FaTimes /></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="icon"><FaTimes /></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="icon"><FaTimes /></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="icon"><FaTimes /></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>


          <div className="card_content">
            <h5 className=" text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="card-period">/month</span></h6>
            <hr></hr>
            <ul>
              <li><span className="icon"><FaCheck /></span><strong>5 Users</strong></li>
              <li><span className="icon"><FaCheck /></span>50GB Storage</li>
              <li><span className="icon"><FaCheck /></span>Unlimited Public Projects</li>
              <li><span className="icon"><FaCheck /></span>Community Access</li>
              <li><span className="icon"><FaCheck /></span>Unlimited Private Projects</li>
              <li><span className="icon"><FaCheck /></span>Dedicated Phone Support</li>
              <li><span className="icon"><FaCheck /></span>Free Subdomain</li>
              <li className="text-muted"><span className="icon"><FaTimes /></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>

          <div className="card_content">
            <h5 className=" text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="card-period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span className="icon"><FaCheck /></span><strong>Unlimited Users</strong>
              </li>
              <li><span className="icon"><FaCheck /></span>150GB Storage</li>
              <li><span className="icon"><FaCheck /></span>Unlimited Public Projects</li>
              <li><span className="icon"><FaCheck /></span>Community Access</li>
              <li><span className="icon"><FaCheck /></span>Unlimited Private Projects</li>
              <li><span className="icon"><FaCheck /></span>Dedicated Phone Support</li>
              <li><span className="icon"><FaCheck /></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="icon"><FaCheck /></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase button">Button</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
