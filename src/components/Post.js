import React, { Component } from 'react';
import {Poststats} from './Poststats';
export class Post extends Component{
    render(){
        return(
            <div id="post">
                <h1>Hello WatchKit</h1>
                <p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developer to create Apple Watch applications.  In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p>                
                <Poststats />
            </div>
        )
    }
}