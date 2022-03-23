/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import actions from "../../actions";
class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage" style={{ width: "100%", height: "100%" }}>
        <div class="untitled">
          <div class="untitled__slides">
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>Best</span>
                <span>Helmets</span>
                <a class="button" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>Outstanding</span>
                <span>Repair</span>
                <a class="button" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>Protective</span>
                <span>Gloves</span>
                <a class="button" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>Bike</span>
                <span>Accesories</span>
                <a class="button" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div class="untitled__shutters"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
