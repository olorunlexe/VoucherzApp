import axios from 'axios';
import {keycloak} from '../keycloak-config';

export default axios.create({
  baseURL: `http://localhost:63745/api/v1`
});