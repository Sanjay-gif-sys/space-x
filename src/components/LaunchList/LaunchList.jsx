import React from "react";
import axios from "axios";
import './style.css'
import Launch from "../Launch/Launch.jsx";
import{Link} from "react-router-dom";
class LaunchList extends React.Component {
    state ={
        launches:[]
    }
    componentDidMount=() =>{
            this.getLaunch();
    }
    getLaunch=()=>{
        axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
            this.setState(
                {launches:response.data}
            )
        }).catch((error)=>{
            console.log(error)
        })

    }

    LaunchList=()=>{
        const LaunchListComponents=this.state.launches.map((launch,index)=>{
            const image = launch.links.flickr_images.length === 0 ?
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg' : launch.links.flickr_images[0];
            return (
            <Link  key={"launch_"+index} to={"/launch/"+launch.flight_number}>
            <Launch 
                    banner={image} 
                    title={launch.mission_name}
                    launchDate={launch.launch_date_local}
                    description={launch.details}
                />
            </Link>
            )
        })
        return LaunchListComponents;

    }
    render(){
        return(
            <div className="launch-list">

                {this.LaunchList()}
               

            </div>
        );
    }
}
export default LaunchList;