import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
