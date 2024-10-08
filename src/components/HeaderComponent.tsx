import logo from '../logo.png'

export default function HeaderComponent() {
    return (
        <div className="header">

            <img src={logo} style={{width:'80px', marginTop:'10px'}} className="logo" alt="" />
            <div className="header-right">
                <h1>Drug List Management</h1>
            </div>

        </div>
    );
}