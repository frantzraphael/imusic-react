import React from 'react';
import type { HeaderState } from '../type';
import '../styles/Header.css';
import emitter from '../emitter';
import './../styles/General.css';

class Header extends React.PureComponent<{}, HeaderState> {
emitSearch: () => void;
  _onKeyUp: (e: Object) => void;
  _onClick: (e: Object) => void;
  _update: (e: Object) => Function;
  ticking: boolean;
  rAf: any;

  state: HeaderState = {
    query: 'jack+johnson'
  };

  constructor(props: Object) {
    super(props);
    this.ticking = false;
    this.rAf = null;
    this.emitSearch = () => emitter.emit('search', this.state);
    this._onClick = e => this.setState(
      { query: e.target.textContent },
      () => (this.state.query.length ? this.emitSearch() : null)
    );
    this._update = ({ keyCode, target: { value: query } }) => _ => {
      this.setState({ query }, () => keyCode === 13 && this.emitSearch());
      this.ticking = false;
    };
    this._onKeyUp = e => {
      if (!this.ticking) {
        this.rAf = window.requestAnimationFrame(this._update(e));
        this.ticking = true;
      }
    };
  }


  render() {
    return (
      <div className="navbar-fixed full black">
        <nav>
          <div className="container nav-wrapper flex center">
            <div className="header-search-wrapper ">
              <i className="material-icons black-text">search</i>
              <input
                type="text"
                placeholder="Escute o que você quiser:"
                onKeyUp={this._onKeyUp}
                id="search-input"
                className="search-input white black-text full"
                data-activates="this.state.query"
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;