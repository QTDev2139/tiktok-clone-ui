import PropTypes from 'prop-types';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
