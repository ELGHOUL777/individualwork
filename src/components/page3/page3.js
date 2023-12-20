import React from 'react';
import img3 from './img3.jpg'

class Page3 extends React.Component {
  render() {
    return (
      <div className="page_3">
        <div>
          <img className="img--pg-3" src={img3} alt="Photo-3" />
        </div>
        <div>
          <p className="txt--pg-3 txt3-1">
          </p>
          <p className="txt--pg-3 txt3-2">We see our clients <br /> as human, and we <br /> work with the <br /> challenges they <br /> face.</p>
        </div>
      </div>
    );
  }
}

export default Page3;
