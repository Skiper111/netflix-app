import React, {Component} from "react";
import Item from "./Item";

export default class TitleList extends Component {
    apiKey = '87dfa1c669eea853da609d4968d294be';

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            mounted: false
        }
    }

    loadContent = () => {
        if (this.props.url && this.props.url !== '') {
            const requestUrl = 'https://api.themoviedb.org/3/'+ this.props.url + '&api_key=' + this.apiKey;
            fetch(requestUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data)=> {
                    this.setState({data: data})
                }).catch((err)=> {
                console.log("There has been an error" + err);
                this.setState({error: true})
            })
        }
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.url !== this.props.url && nextProps.url !== "") {
            this.setState({mounted: true, url:nextProps.url},
                ()=> {
                    this.loadContent();
                })
        }
    }

    componentDidMount() {
        if(this.props.url !== '' || typeof this.props.url !== 'undefined') {
            this.loadContent();
            this.setState({ mounted: true })
        }
    }

    render() {
        console.log(this.state.data);
        let titles = '';
        if(this.state.data.results !== undefined) {
            titles = this.state.data.results.map((title, i)=>{
                if(i < 5 ) {
                    let name = '';
                    let backDrop = '';
                    let path = 'https://image.tmdb.org/t/p/original';
                    if (!title.backdrop_path) {
                        backDrop = path + title.poster_path;
                    } else {
                        backDrop = path + title.backdrop_path;
                    }
                    let rating = title.vote_average;
                    let overview = title.overview;
                    if(!title.name){
                        name = title.original_title
                    } else {
                        name = title.name
                    }
                    return (
                        <Item key={title.id} backDrop={backDrop} name={name} rating={rating} overview={overview}/>
                    )
                } else {
                    return (<div key={title.id}></div>)
                }
            });
        }

        return (
            <div ref='titlecategory' className='TitleList'>
                <div className='Title'>
                    <h1>{this.props.title}</h1>
                    <div className='titles-wrapper'>
                        {titles}
                    </div>
                </div>
            </div>
        )
    }
}
