import React, { Component } from 'react';
import './style.css'
import Header from '../Header';
import Footer from '../Footer';

class MainLayout extends Component {
    render() {
        return (
            <div className='main__layout'>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
    
}

export default MainLayout;
