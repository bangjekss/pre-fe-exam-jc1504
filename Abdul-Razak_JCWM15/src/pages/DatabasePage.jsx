import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class DatabasePage extends Component {
  state = {};
  render() {
    return (
      <div style={{ minHeight: '100vh' }} className="py-5">
        <div>iya</div>
        <div className="d-flex justify-content-center my-5">
          <Link to="/" className="mx-1">
            <Button color="primary">Soal</Button>
          </Link>
          <Link to="/clue" className="mx-1">
            <Button color="danger">Clue</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DatabasePage;
