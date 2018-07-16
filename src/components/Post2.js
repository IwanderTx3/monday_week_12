import React, { Component } from 'react';
import {Poststats2} from './Poststats2';
export class Post2 extends Component{
    render(){
        return(
            <div id="post">
                <h1>Introduction to Swift</h1>
                <p>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in developement but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the swift language and how you can get started.</p>                
                <Poststats2 />
            </div>
        )
    }
}