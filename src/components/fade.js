import React from "react"

export default class Fade  extends React.Component {
    state = {
        isOpen: true,
        isHide: false,
    };
    timeout = setTimeout(() => { this.setState({isOpen: false}); console.log("ちめ"); }, 3000);
    timeout = setTimeout(() => { this.setState({isHile: true}); console.log("ちめ"); }, 4000);

    render() {
        return (
            <div className="farst"
            style={{
                position: "absolute",
                transition: '1s',
                opacity: this.state.isOpen ? 1 : 0,
                width: "100%",
                height: "100%",
                display: this.state.isHide ? "none" : "",
            }}
            >
                <span className="farst-message">
                    Information
                </span>
          </div>
        );
    };
}