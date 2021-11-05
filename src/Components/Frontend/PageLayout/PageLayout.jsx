import './PageLayout'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const PageLayout = ({children}) =>{
    return(
        <div className="frontEndPageLayoutContainer">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>   
    )
}
export default PageLayout;