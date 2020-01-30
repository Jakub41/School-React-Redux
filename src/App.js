import React, { Component } from "react";
import "./App.css";
import StudentsComponent from "./components/studentsComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <StudentsComponent />
            </div>
        );
    }
}

export default App;
