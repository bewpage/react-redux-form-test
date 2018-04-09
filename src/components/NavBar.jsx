import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            navCollapsed: true
        }
    }

    _onToggleNav = () => {
        this.setState({
            navCollapsed: !this.state.navCollapsed
        })
    };

    render(){
        const { navCollapsed } = this.state;
        return(
            <div>
                {/*colapse not working use react toggle function to change class*/}
                <nav className='navbar navbar-expand-md navbar-light bg-light'>
                    <button className='navbar-toggler'
                            type='button'
                            aria-expanded="fals"
                            onClick={this._onToggleNav}
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                        <div className='navbar-nav'>
                            <Link className='nav-item nav-link' to='/'>Home</Link>
                            <Link className='nav-item nav-link' to='/posts/new'>New Post</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;