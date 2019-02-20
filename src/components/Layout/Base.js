import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Offsidebar from './Offsidebar'
import Footer from './Footer'

export class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        }
    }
    componentDidMount = () => {
        if (window.location.pathname === "/") {
            this.setState({
                isHidden: true
            })
        }
    }



    render() {
        return (
            <div className="wrapper">
                {!this.state.isHidden ? <Header /> : null}
                {!this.state.isHidden ? <Sidebar /> : null}
                {!this.state.isHidden ? <Offsidebar /> : null}

                <section className="section-container">
                    {this.props.children}
                </section>
                {!this.state.isHidden ? <Footer /> : null}
            </div>
        )
    }
}

export default Base
