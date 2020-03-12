import React from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import {getTop} from "../services/api.js";
import TopMenu from "../includes/TopMenu.js";
import Card from "../includes/Card.js";
import ModalArtist from "../includes/Modal.js";

//style
import globalStyle from '../styles/style-global.js'


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            profileLoaded: false,
            access_token: null,
            dataLoaded: [],
            timeRangeSelected : "short_term",
            modalVisible: false,
        }
        this.rangeChange = this.rangeChange.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    
    componentDidMount(){
        this.loadData();
    }
    
    /*  
    |
    | -- Query on API
    |
    */
    loadData(newRange) {

        let time_range;
        let type = this.props.route.params.type;

        //Check if range is specified (click on menu top)
        if(newRange){ 
            time_range = newRange
        } else {
            time_range = this.state.timeRangeSelected;
        }

        this.setState({
            isLoading: true,
        })

        getTop(time_range, type).then(result => {
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


    /*
    |
    | -- Display Modal
    |
    */
    setModalVisible(id) {
        this.setState({modalVisible: !this.state.modalVisible});
        this.setState({
            artistId : id,
        })
    }
    
    render() {
        return (  
            <SafeAreaView style={globalStyle.container}>
                 
                {this.state.modalVisible ? (
                    <ModalArtist isVisible={this.state.modalVisible} id={this.state.artistId} closeModal={this.setModalVisible} />
                ):(()=>{ return <Text>No Popup</Text>}) 
                }

                <TopMenu onUpdate={this.rangeChange}/>     

                <View style={[globalStyle.offsetTop, globalStyle.container]}>
                    {this.state.isLoading ? 
                    <Text>Chargement de vos données</Text>
                    : 
                    <View style={globalStyle.listContainer}>
                        <FlatList
                            data={this.state.dataLoaded}
                            renderItem={({item, index}) => {
                                return <Card datas={item} type={this.props.route.params.type} id={index} setModal={this.setModalVisible}></Card>
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    }
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
