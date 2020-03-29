import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 40.737685,
            long: -73.996961, 
        }
    }

    render() {

        const { lat, long } = this.state;
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: lat, lng: long }}
                defaultZoom={ 15 }
            >
            {props.isMarkerShown && <Marker position={{ lat: lat, lng: long }} />}
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample isMarkerShown
                    containerElement={<div style={{ height: `100%`, width: `46vw` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default SearchMap;