import React, {Component} from "react";
import Form from "./component/Form/Form";
import s from './App.module.css';

class App extends Component {

    render () {
        return (
            <div className={s.container} >
                <Form/>
            </div>
        )
    }
}

export default App;
