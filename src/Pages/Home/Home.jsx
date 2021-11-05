import PageLayout from "../../Components/Frontend/PageLayout/PageLayout"
import Banner from "../../Components/Frontend/Banner/Banner"
import TopPlace from "../../Components/Frontend/TopPlace/TopPlace"
import Services from "../../Components/Frontend/Services/Services"
const Home = () =>{
    return(
        <PageLayout>
            <div className="homePageContainer">
                <Banner></Banner>
                <TopPlace></TopPlace>
                <Services></Services>
            </div>
        </PageLayout>
    )
}
export default Home