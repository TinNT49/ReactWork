import React, { Component } from "react";

export default class SinhVien extends Component {
  hoTen = "Nguyễn Văn A";
  lop = "FrontEnd xxx";
  diaChi = "184 Hoàng Văn thụ, Phường 5, Quận 10";

  renderThongTinSinhVien = (tenTrungTam) => {
    return (
      <ul>
        <li>Họ tên: {this.hoTen}</li>
        <li>Lớp: {this.lop}</li>
        <li>Trung tâm: {tenTrungTam}</li>
        <li>Địa chỉ: {this.diaChi}</li>
      </ul>
    );
  };

  render() {
    const tenTrungTam = "CyberSoft_1";
    return (
      <div className="container">
        {this.renderThongTinSinhVien(tenTrungTam)}
      </div>
    );
  }
}
