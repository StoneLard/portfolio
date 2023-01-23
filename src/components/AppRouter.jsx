import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { appRoutes } from './router';


const AppRouter = () => {
    return (
        <Routes>
            {appRoutes.map(route => 
                <Route key={route.id} path={route.path} element={route.element}/>
            )}
            <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
    );
};

export default AppRouter;