import React from 'react';
import classes from './TopBar.module.css';

const TopBar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <div className={classes.NavLogo}>
                    <img src='/FrokerLogo.png' alt='Froker' />
                </div>
                
                <a href='/'>Home</a>
                <a href='/'>Blogs</a>
                <a href='/'>Discover Froker</a>
                
            </nav>
        </header>
    );
}

export default TopBar;