import React, {Component} from "react";
import Input from "./component/Input/Input";
import s from './App.module.css';

class App extends Component {

    render () {
        return (
            <div className={s.container} >
                <Input/>
            </div>
        )
    }
}

export default App;
