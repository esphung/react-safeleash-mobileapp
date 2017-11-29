/*
* @Author: homeuser
* @Date:   2017-11-28 11:58:46
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 12:00:33
*/

import React from 'react';

class BackgroundImage extends React.Component {
    render() {
        return (
            <Image source={ref}>
                    {this.props.children}
                    
            </Image>
        )
    }
}

module.exports = BackgroundImage