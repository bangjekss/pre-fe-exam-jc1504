import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class CluePage extends Component {
  render() {
    return (
      <div className="py-5" style={{ height: '100vh' }}>
        <h1>PETUNJUK</h1>
        <p>1. Fitur Add Data</p>
        <p>2. Fitur Edit Data</p>
        <p>3. Fitur Delete Data</p>
        <p>4. Fitur Delete All Data</p>
        <p>
          5. Filter By Pekerjaan dimana option berdasarkan unique data pekerjaan yang sudah di
          tambah
        </p>
        <p>Note</p>
        <p>1. Gunakan JSON Server untuk menyimpan Datanya</p>
        <p>2. Boleh melanjutkan disini atau bikin Project Baru</p>
        <p>3. Kirim Link Github ke lian.eddy@gmail.com</p>
        <div className="d-flex justify-content-center my-5">
          <Link to="/" className="mx-1">
            <Button color="primary">Soal</Button>
          </Link>
          <Link to="/database" className="mx-1">
            <Button color="success">Go to database</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CluePage;
