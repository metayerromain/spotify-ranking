import React from 'react';
import { Text, View } from 'react-native';

class Artists extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            access_token: null,
            dataLoaded: [],
            timeRangeSelected : "short_term"
        }

        this.rangeChange = this.rangeChange.bind(this);
    }

    /*
    |
    | -- Query on API
    |
    */
   loadData(newRange) {

        let time_range;

        //Check if range is specified (click on menu top)
        if(newRange){
            time_range = newRange
        } else {
            time_range = this.state.timeRangeSelected;
        }

        this.setState({
            isLoading: true,
        })

        getTop(this.state.access_token, time_range).then(result => {
            this.setState({
                dataLoaded : result.items,
                isLoading : false,
            })
        })
    }


    /*
    |
    | -- Change value range
    |
    */
   rangeChange = (newRange) => {

        //Go Query
        this.loadData(newRange);
    }

    render(){
        return(
            <SafeAreaView style={globalStyle.container}>

                <TopMenu onUpdate={this.rangeChange}/>     

                    <View style={[globalStyle.offsetTop, globalStyle.container]}>

                        {this.state.isLoading ? 

                        <Text>Chargement de vos données</Text>
                        : 
                        <View style={globalStyle.listContainer}>
                            <FlatList
                                data={this.state.dataLoaded}
                                renderItem={({item, index}) => <Card datas={item} id={index}></Card>}
                                keyExtractor={item => item.id}
                            />
                        </View>      

                        }

                    </View>
                }
            </SafeAreaView>
        )
    }
}

export default Artists;