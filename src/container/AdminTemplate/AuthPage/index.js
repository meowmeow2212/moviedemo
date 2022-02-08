import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <h3>AuthPage</h3>
                <form>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="taiKhoan" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" name="matKhau" />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}
