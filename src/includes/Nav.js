import React from 'react';


class Nav extends React.Component {

    render(){
        return(
            <View style={{position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'space-around', right: 0, left: 0, }}>
                <Text>Top tracks</Text>
                <Text>Top artists</Text>
            </View>
        );
    }

}

export default Nav;