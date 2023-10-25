import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        "Bearer MVkq6YcSPt_S1lcOVb8lVRlxX-Y-9Buw-1mhc6Z7uOpf7LxaZxSCwRFqBh_uRfhcEwgOM6UlO9Oxq2dk3XFQT_nMUHODIrEoHMx3mwtue_yAs3HEuVLTI5n-Wyv4ZHYx"
    },
});