import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div className="bgMain py-5" style={{ height: '100vh' }}>
        <h1>SOAL 1</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <select className="form-control">
              <option>Filter By Pekerjaan</option>
            </select>
          </div>
        </div>
        <table className="table mb-4">
          <thead>
            <tr>
              <td>Nama</td>
              <td>Usia</td>
              <td>Pekerjaan</td>
              <td>Act</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="row">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Nama" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Usia" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Pekerjaan" />
          </div>
          <div className="col-md-3">
            <input type="button" className="form-control btn-info" value="add Data" />
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <Link to="/clue" className="mx-1">
            <Button color="danger">Clue</Button>
          </Link>
          <Link to="/database" className="mx-1">
            <Button color="success">Go to database</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
