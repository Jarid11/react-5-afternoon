import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { updateAgent } from "../../ducks/reducer";

class WizardFive extends Component {
  render() {
    const { updateAgent } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Are you currently working with a real estate agent?</p> <br />
          <div className="row">
            <Link to="/wSix">
              <button value={"Yes"} onClick={e => updateAgent(e.target.value)}>
                Yes
              </button>
            </Link>
            <Link to="/wSix">
              <button value={"No"} onClick={e => updateAgent(e.target.value)}>
                No{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { realEstateAgent } = state;

  return { realEstateAgent };
};

export default connect(mapStateToProps, { updateAgent })(WizardFive);
