import react from 'react';
// import { buyCake } from '../redux/index';
import buyCake from '../redux/Cakes/CakeActions';
import { connect } from 'react-redux';
const CakeContainer = (props) => {
    return (
        <>
            <div>
                <h2>
                    No of cakes- {props.noOfCakes}
                </h2>
                <button
                    onClick={props.buyCake}>
                    Buy Cake
                </button>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);