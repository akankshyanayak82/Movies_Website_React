import styles from "./Card.module.css"
import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    return (
        <div className={styles.card}>
        <img src={this.props.Poster} className={styles.image} alt="not loading"/>
        <div className={styles.content}>
          <p className={styles.movietitle}>{this.props.Title}</p>
        </div>
      </div>
    )
  }
}
