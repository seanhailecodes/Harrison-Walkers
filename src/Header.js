import React, { Component } from 'react';

export default class Header extends Component {
    render() {

        return (
               <div className="navbar">

                <li className="style"><a href='https://www.instagram.com/harrison_dog_walkers/'><font color="white">Instagram</font> </a></li>

                <li className="style"><a href='https://random.dog/'><font color="white">Random Dog Photos!</font></a></li>

                <li className="style"><a href='https://sitstay.com/blogs/good-dog-blog'><font color="white">Blog</font></a></li>

                <li className="style"><a href='https://www.yelp.com/biz/harrison-walkers-harrison'><font color="white">More Info</font></a></li>

            </div>

        )
    }
}

