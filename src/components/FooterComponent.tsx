import * as React from 'react';
import { VERSION } from '../AppConstants';

export default function FooterComponent() {
    return (
        <div className="footer">
            <p className="version">Version:{VERSION}</p>
        </div>
    );
}