import React, { Component } from 'react'
import Card from './Card';
export default class Cardgrid extends Component {
    constructor(){
        super();
        this.state = {
            movies:[],
            allmovie:[],
            searching:"",
        }
    }
    componentDidMount(){
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then(response=>response.json())
        .then(data =>{console.log(data.Search)
            this.setState({
                movies: data.Search,
            })})

    }
     searchbarhandler=(event)=>{
        // if(event.target.value.length>1)
        //  this.setState((previousState)=>{
        //     return{
        //     searching:event.target.value,
        //     movies: previousState.movies.filter((filtereditem)=>filtereditem.Title.includes(previousState.searching))
        //  }})
        // else{
        //     this.setState((previousState)=>{
        //         return{
        //             movies:previousState.allmovies
        //         }
        //     })
        // }
        this.setState((previousState)=>{
            return{
            searching:event.target.value,
         }})
        fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then(response=>response.json())
        .then(data =>{console.log(data.Search)
            this.setState((previousState)=>{
               return{ movies: data.Search.filter((filtereditem)=>filtereditem.Title.includes(previousState.searching))}
            })})
    }
  render() {
    return (
      <div className='gridpage'>
         <div className='textgrid'>
            <input type="text" placeholder="Search for Movie Titles ..." onChange={this.searchbarhandler}></input>
         </div>
      <div className='container'>
        { this.state.movies &&
          this.state.movies.map((movie)=>{
            return(<Card key={movie.Title} Title={movie.Title}  Poster={movie.Poster}></Card>)
          })
         }
        </div>
     </div>
    )
  }
}
