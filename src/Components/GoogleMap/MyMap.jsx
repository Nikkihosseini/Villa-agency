import { GoogleMap, LoadScript , Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};
const center = {
  lat: 25.9500,  // Latitude of Sunny Isles Beach
  lng: -80.1228  // Longitude of Sunny Isles Beach
};

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBv9OaK1kAKql2YzV-Em7Ez44PGjNz991M">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
