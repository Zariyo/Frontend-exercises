import { connect } from "react-redux";


const Home = (props) => {
    return (
        <div>
            <div>
                <h3>Prezenty sw mikolaja</h3>
                <h1>Przejdz do /prezents aby wyswietlic liste</h1>
            </div>
        </div>
    )
};


export default connect(null, null)(Home);