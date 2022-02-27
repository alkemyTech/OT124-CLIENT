import React from "react";
import GoogleMaps from "simple-react-google-maps";
export default function Maps() {
    return (
      <div className=" container flex justify-center mt-5">
        <GoogleMaps
          apiKey={"AIzaSyAJ8RIS7K_KIB7zrt415HVm94FRdWZHp5w"}
          style={{ height: "180px", width: "300px" }}
          zoom={16}
          center={{
            lat: -34.6037345,
            lng: -58.3837591
          }}
          markers={[
            { lat: -34.6037345, lng: -58.3837591 }
          ]}
        />
      </div>
    );
}