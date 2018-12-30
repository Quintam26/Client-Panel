import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegisteration, setDisableBalanceOnAdd, setDisableBalanceOnEdit } from '../../actions/settingsActions';

class Settings extends Component {

  disableBalanceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };

  disableBalanceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };

  allowRegisterationChange = () => {
    const { setAllowRegisteration } = this.props;
    setAllowRegisteration();
  };

  
  render() {
    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegisteration } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left">Back To Dashboard</i>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registeration</label>{' '}
                <input type="checkbox" name="allowRegisteration" checked={!!allowRegisteration} onChange={this.allowRegisterationChange}/>
              </div>

              <div className="form-group">
                <label>Disable Balance on Add</label>{' '}
                <input type="checkbox" name="disableBalanceOnAdd" checked={!!disableBalanceOnAdd} onChange={this.disableBalanceOnAddChange}/>
              </div>

              <div className="form-group">
                <label>Disable Balance on Edit</label>{' '}
                <input type="checkbox" name="disableBalanceOnEdit" checked={!!disableBalanceOnEdit} onChange={this.disableBalanceOnEditChange}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegisteration: PropTypes.func.isRequired
};

export default connect((state, props) => ({
  auth: state.firebase.auth,
  settings: state.settings
}), { setAllowRegisteration, setDisableBalanceOnAdd, setDisableBalanceOnEdit })(Settings);