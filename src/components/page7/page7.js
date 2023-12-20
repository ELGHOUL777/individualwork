import React from 'react';

class Page7 extends React.Component {
  render() {
    return (
      <div className="page_7">
        <div className="header--pg-7">
          <h1 className="hdr1--pg-7">A Consult Co.</h1>
          <p className="txt--pg-7">Building the businesses of tomorrow.</p>
        </div>
        <div className="main--pg-7">
          <h2 className="main_hdr2--pg-7">contact us</h2>
          <ul className="list--pg-7">
            <li className="link--pg-7">Instagram</li>
            <li className="link--pg-7">Facebook</li>
            <li className="link--pg-7">Twitter</li>
          </ul>
        </div>
        <div className="footer--pg-7">
          <div>
            <h2 className="footer_hdr2--pg-7">Our locations</h2>
            <div className="address_container--pg-7">
              <div className="address--pg-7 adrs7-1">
                <div>408 Byers Lane</div>
                <div>Sacramento, CA 94260</div>
              </div>
              <div className="address--pg-7 adrs7-2">
                <div>189 49th Avenue Grise</div>
                <div>Fiord, NU X0A 0J0</div>
              </div>
            </div>
          </div>
          <div className="email--pg-7">hello@reallygreatsite.com</div>
        </div>
      </div>
    );
  }
}

export default Page7;
