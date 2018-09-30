//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import pic from "./pics.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    pic,
    clickedChar: [],
    score: 0
  };

//when you click on a pic ... the character is taken out of the array
  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;

//if you click on a character that has already been selected, the game is reset and cards reordered
    if (CharAlreadyClicked) {
      this.setState({
        pic: this.state.pic.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChar: [],
        score: 0
      });
        alert("Play again, your call.");

//if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          pic: this.state.pic.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: this.state.clickedChar.concat(
            currentChar
          ),
          score: this.state.score + 1
        },
//if you get all 12 characters corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You win, collect the bounty.");
            this.setState({
              pic: this.state.pic.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.pic.map(pic => (
            <FriendCard
              imageClick={this.imageClick}
              id={pic.id}
              key={pic.id}
              image={pic.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;