import * as React from "react";
import logo from "../../assets/img/appleIphone13.jpg";
import styles from "./home.module.css";
import RecentBids from "../HomeTabs/RecentBids";
import BuyPlays from "../HomeTabs/BuyPlays";
import ActivateBots from "../HomeTabs/ActivateBots";
import ProductInfo from "../HomeTabs/ProductInfo";
import user from "../../assets/img/user.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="container">
      <div style={{ position: "relative", top: "157px", width: "100%" }}>
        <div className="row">
          <div className={`col-md-5 ${styles.banner_left}`}>
            <img src={logo} height={300} width={300} />
          </div>
          <div className="col-md-7 d-flex justify-content-center flex-column">
            {/* bidder tabs  */}
            <div className="page-content page-container" id="page-content">
              <div className="row ">
                <div>
                  <div className="mb-3 d-flex justify-content-center">
                    <ul
                      className={`${styles.nav} nav nav-pills gap-3`}
                      role="tablist"
                    >
                      <li className={`nav-item active ${styles.banner_tabs}`}>
                        <a
                          className={`nav-link text-light ${
                            tab == 0 ? styles.nav_link : ""
                          }`}
                          onClick={() => setTab(0)}
                          id="home-tab"
                          data-toggle="tab"
                          href="#home2"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          {" "}
                          <RecentBids />
                        </a>
                      </li>
                      <li className={`nav-item ${styles.banner_tabs}`}>
                        <a
                          className={`nav-link text-light ${
                            tab == 1 ? styles.nav_link : ""
                          }`}
                          onClick={() => setTab(1)}
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile2"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          {" "}
                          <BuyPlays />
                        </a>
                      </li>
                      <li className={`nav-item ${styles.banner_tabs}`}>
                        <a
                          className={`nav-link text-light ${
                            tab == 2 ? styles.nav_link : ""
                          }`}
                          onClick={() => setTab(2)}
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact2"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          <ActivateBots />
                        </a>
                      </li>
                      <li className={`nav-item ${styles.banner_tabs}`}>
                        <a
                          className={`nav-link text-light ${
                            tab == 3 ? styles.nav_link : ""
                          }`}
                          onClick={() => setTab(3)}
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact2"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          {" "}
                          <ProductInfo />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* bid table  */}
            <div className={`${styles.bider_Table}`}>
              <table class={`table ${styles.borderless}`}>
                <thead>
                  <tr>
                    <th>Bid</th>
                    <th>User</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                  <tr>
                    <td>$ 4,986</td>
                    <td>Athakkar</td>
                    <td>16:24:20 EST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* bid in auction avatars  */}
            <div className={`box-footer d-flex ${ true ? ' bg-color-green' : '' }`}>
            <div className="auction-current-price pr-2">100$</div>

            <Link
              className={`auction-action-circle countdown-image countdown-image-${1} ${true ? 'bid-button-disabled' : ''}`}
            >
              <span className="counter-number font-din-pro-cond text-blue-color">
                {1}
              </span>
            </Link>

            <div className="auction-bid-button ml-auto font-size-m">
              <div className="text-left">JohnWick</div>
            </div>
          </div>
            <div>
              <h5 className={`${styles.bider_title}`}>Bidders in auctions</h5>
              <div className={`${styles.bider_auction}`}>
                <img src={user} />
                <img src={user} />
                <img src={user} />
                <img src={user} />
                <img src={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
