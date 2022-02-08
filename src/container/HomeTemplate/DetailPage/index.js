import React, { Component } from "react";
import { actDetailMovieApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

import { Link } from "react-router-dom";

class DetailMovie extends Component {
  componentDidMount() {
    //lấy id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
  }


  renderTable = () => {
    const { data } = this.props;
    console.log(data);

    //if data # null => duyet mang
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            {/* <td>{item.ngayChieuGioChieu}</td> */}
            {/* Parse sang date */}
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            {/* <td>{item.ngayChieuGioChieu}</td> */}
            {/* parse sang time */}
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <Link className="btn btn-success" to="#phong-ve">
                Đặt vé
                 </Link>
            </td>
          </tr>
        )
      });
    }
  }

  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h1>DetailMovie</h1>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={data && data.hinhAnh} alt="" />
          </div>
          <div className="col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cụm rạp</th>
                  <th>Tên rạp</th>
                  <th>Ngày chiếu</th>
                  <th>Giờ chiếu</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actDetailMovieApi(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
