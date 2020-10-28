import React from "react";

export default function Tab(props) {
    if (props.isSelected) {
      return <div>{props.children}</div>
    }

    return null;

}
