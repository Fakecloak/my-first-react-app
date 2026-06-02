import { Component } from "react";

class ClassInputCount extends Component {
    constructor(props) {
        super(props);  

        this.render = this.render.bind(this);
    }

    render() {
        return (
        <h4> Todo Count: {this.props.count} </h4>
        );
    }
}

export default ClassInputCount;