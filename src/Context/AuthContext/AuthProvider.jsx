import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    return <AuthContext value={""}>
        {children}
    </AuthContext>
        
    
};

export default AuthProvider;