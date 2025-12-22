import React from 'react';

function Footer(){
    return(
        <footer style={{
            textAlign: 'center',
            padding: '10px',
            background: '#f8f9fa',
            color:'#666',
            marginTop: 'auto',
            borderTop: '1px solid #eaeaea'
        }}>
            <p>&copy; {new Date().getFullYear()} Estate Agent. All rights reserved.</p>

        </footer>
    );
}
export default Footer;