import React, { Component } from "react";

const Passwrd = ({ pass: { roll, passwords } }) => (
  <p style={{ margin: 20 }}>
    {roll}
    <br />
    <em>{passwords}</em>
  </p>

  // <table>
  //   <tr style={{border:1}}>
  //     <th style={{padding:20}}>{roll}</th>
  //     <th>{passwords}</th>
  //   </tr>
  //   <br />
  // </table>
);

class App extends Component {
  state = {
    loading: true,
    pass: {},
    passes: []
  };

  async componentDidMount() {
    // const url = "http://lyricsfindrr.000webhostapp.com/fetch_it.php";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // fetch("http://lyricsfindrr.000webhostapp.com/fetch_it.php")
    //   .then(response => response.json())
    //   .then(json => this.setState({ pass: json }))
    //   .catch(error => alert(error.message));
  }

  fetchPasses = () => {
    fetch("http://lyricsfindrr.000webhostapp.com/fetch_it.php")
      .then(response => response.json())
      .then(json => this.setState({ passes: json }))
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div>
        <h1>Passwords Dashboard</h1>
        <button onClick={this.fetchPasses} className="btn default">
          Load Credentials
        </button>
        {this.state.passes.map(pass => (
          <Passwrd key={pass.id} pass={pass}></Passwrd>
        ))}
      </div>
    );
  }
}

export default App;
