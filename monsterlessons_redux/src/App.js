import React, {Component} from "react";
import {connect} from "react-redux";

function App() {
    console.log(this.props.testStore)
    return (
        <div>
            <input type="text" />
            <button >Add track</button>
            <ul className="list">
                {this.props.testStore.map((track, index) => <li key={index}>{track}</li>)}
            </ul>
        </div>
    );
}

export default connect(
    state => (
        {
            testStore: state
        }
    ),
    dispatch => (
        {}
    )
)(App);
