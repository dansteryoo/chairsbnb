import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
                {props.isMarkerShown && <Marker position={{ lat: lat, lng: long }} />}
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapExample isMarkerShown
                    containerElement={<div style={{ height: `350px`, width: '620px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default ShowMap;