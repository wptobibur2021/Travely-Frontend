import { initializeApp } from "firebase/app";
import Config from './Config.js'
const Authentication = () =>{
    initializeApp(Config);
}
export default Authentication;