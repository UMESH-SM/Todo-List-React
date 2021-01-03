import React, { Component } from "react";

export class FetchDataFromAPI extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading || !this.state.people.length) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <br></br>
        {this.state.people.map((person) => (
          <div key={person.login.uuid}>
            <br></br>
            <img src={person.picture.large} alt="profile pic" />
            <div>
              Name : {person.name.title}.{person.name.first} {person.name.last}
            </div>
            <div>Gender : {person.gender}</div>
            <div>Country : {person.location.country}</div>
          </div>
        ))}
      </div>
    );
  }
}
