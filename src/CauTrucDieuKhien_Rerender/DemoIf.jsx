import React, { Component } from "react";

export default class DemoIf extends Component {
  //Thuộc tính
  isLogin = true;
  userName = "Ninh Trung Tín";

  // Cách 1: Dùng phương thức kết hợp if để xác định nội dung render ra giao diện
  //   renderContent = () => {
  //     if (this.isLogin) {
  //       //isLogin === true => Người dùng đã đăng nhập
  //       this.userNam = "Ninh Trung Tín";
  //       return (
  //         <div>
  //           Hello {this.userNam} - Cybersoft <button>Logout</button>
  //         </div>
  //       );
  //     }

  //     return (
  //       <div>
  //         <button>Login</button>
  //       </div>
  //     );
  //   };

  //Phương thức render của component DemoIf
  render() {
    return (
      <div>
        {/* {this.renderContent()} */}
        {this.isLogin ? (
          <div>
            Hello {this.userName} - Cybersoft <button>Logout</button>
          </div>
        ) : (
          <button>Login</button>
        )}
      </div>
    );
  }
}
