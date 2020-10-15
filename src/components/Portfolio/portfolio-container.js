import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component {
    constructor () {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio!",
            isLoading: false,
            data: [
                {title: "Quip", category: 'eCommerce', url: 'google.com', slug: "quip"}, 
                {title: "EventBright", category: 'Scheduling', url: 'google.com', slug: "eventbright"},
                {title: "Other", category:'Productivity', url: 'google.com', slug: "other"}, 
                {title: "Haha!", category: 'eCommerce', url: 'google.com', slug: "haha"},
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter (item=> {
                return item.category === filter;
            })
        });
     }

     getPortfolioItems (){
        axios
          .get('https://hannahdavis.devcamp.space/portfolio/portfolio_items')
          .then (response => {
            console.log("response data", response);
          })
          .catch(error => {
             console.log(error);
          });
        }


    portfolioItems(){
        const data = [];

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug}/>;
        });
    }

    render() {
        if (this.state.isLoading){
            return <div>Loading...</div>;
        }

        this.getPortfolioItems();

        return (
            <div>
                <h2> {this.state.pageTitle} </h2>

                <button onClick = {() => this.handleFilter ('eCommerce')} >eCommerce</button>;

                {this.portfolioItems()}
            </div>
        )
    }
}