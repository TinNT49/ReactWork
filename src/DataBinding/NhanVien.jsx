import React, { Component } from "react";

export default class NhanVien extends Component {
  hoTenNhanVien = "Nguyễn Văn B";
  soTuoi = 27;
  chucVu = "Nhân viên văn phòng";

  renderThongTinNhanVien = (inputPhongBan) => {
    const ngaySinh = "01/01/1991";
    return (
      <ul>
        <li>Họ Tên: {this.hoTenNhanVien}</li>
        <li>Số tuổi: {this.soTuoi}</li>
        <li>Chức vụ: {this.chucVu}</li>
        <li>Ngày sinh: {ngaySinh}</li>
        <li>Phòng ban: {inputPhongBan}</li>
      </ul>
    );
  };

  render() {
    const phongBan = "Sản xuất game máy tính";
    return (
      <div className="container">{this.renderThongTinNhanVien(phongBan)}</div>
    );
  }
}
