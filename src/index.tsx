import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';


type State = {
    path: string
    pattern: string
}



 

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            path: "/Users/surasak/Project/HelloWorld/src/SearchApi",
            pattern: "*.json"
            
        }
        this.state = {
            path: '',
            pattern: '',
          };

        this.handlepathChange = this.handlepathChange.bind(this);
        this.handlepatternChange = this.handlepatternChange.bind(this);
    }

   
    handlepathChange (evt) {
        let self = this ;
        self.setState({ path: evt.target.value });
      }
      
      handlepatternChange (evt) {
        let self = this ;
        self.setState({ pattern: evt.target.value });
      }
    onClick = (e) => {
        console.log(this.state)
     
 
        axios.post('http://localhost:5000/api/search/searchFile', {
        path: this.state.path, 
        pattern: this.state.pattern,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
      
      }
    
      })
      .then((response) => {
        console.log(response.data)

    })
    .catch((error) => {
        console.log("AXIOS ERROR: ", error)
    })
    
    }

    render() {
        return (
            <div>
                <h1>Search File</h1>
                <div className="text">
                    <label>Path :</label>
                    <input type="text" name="Path" onChange={this.handlepathChange}></input>
                    
                </div>
                <br></br>
                <div className="text">
                    <label>Pattern :</label>
                    <input type="text" name="Pattern"  onChange={this.handlepatternChange}></input>
                
                </div>
                <br></br>
                <div>
                    <button onClick={this.onClick} type="submit">Search</button>
                </div>
            </div>
        )

    }
}

var root = document.getElementById("root")
ReactDOM.render(<App />, root);