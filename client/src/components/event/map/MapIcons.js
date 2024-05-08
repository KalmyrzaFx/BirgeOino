import L from 'leaflet';

import Icon from '../../../img/BirgeLogo3.svg';

export const markerIcon = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: Icon,
    iconSize: [35, 41],
    popupAnchor: [0, -10]
});