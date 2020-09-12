import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  render() {
    /**
     * PureComponent sẽ không re0render lại nếu k chỉ viết html, không nhận bất kỳ props từ component
     */
    console.log("Pure - render");
    return (
      <div>
        <h3>Pure</h3>
      </div>
    );
  }
}
