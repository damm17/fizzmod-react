import React, {Component} from "react"
import {connect} from "react-redux"

class Header extends Component{
    render(){
        let {links} = this.props
        return (
            <header>
                <h1>SPA</h1>
                <nav>
                    {links.map(link =>
                        <a href={`${link}.html`} key={link}>{link}</a>
                    )}
                </nav>
            </header>
        )
    }
}

let mapStateToProps = store => ({links : store.links})

export default connect(mapStateToProps,null)(Header)