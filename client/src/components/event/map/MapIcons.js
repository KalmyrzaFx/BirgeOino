import L from 'leaflet';

import Icon from '../../../img/BirgeLogo3.png';

export const markerIcon = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconSize: [35, 41],
    popupAnchor: [0, -10]
});