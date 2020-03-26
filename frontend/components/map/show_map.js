// import React from 'react';

// class MapContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {

//         const { lat, long } = this.props;
//         const mapOptions = { 
//                 center: { lat: lat, long: long }, 
//                 zoom: 10 
//             };

//         this.map = new google.maps.Map(this.mapNode, mapOptions);
//         this.marker = new google.maps.Marker({
//             map: this.map,
//             draggable: false,
//             position: { lat: lat, long: long },
//             animation: google.maps.Animation.DROP
//         });


//         this.marker.setMap(this.map);

//     };

//     render() {
//         const { address } = this.props;
//         
//         return (
//                 <div id='map-container' ref={map => this.mapNode = map} >

//                 </div>

//         )
//     }
// };

// export default ShowMap;


import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class ShowMap extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        
        const { lat, long } = this.props;
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: lat, lng: long }}
                defaultZoom={ 15 }
            >
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: `350px`, width: '620px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default ShowMap;