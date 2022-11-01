import React, { useState } from 'react'
import { Configuration } from '../Configuration'
import { Credits } from '../Credits'
import Dashboard from '../Dashboard'
import { Table } from '../Table'

export const Router = () => {

    const [route, setRoute] = useState("DASHBOARD")

    const routeSwitch = (route) => {
        switch (route) {
            case 'P2P':
                return <Table gameMode={route} setRoute={setRoute} />;
            case 'P2C':
                return <Table gameMode={route} setRoute={setRoute} />;
            case 'CONFIG':
                return <Configuration setRoute={setRoute} />;
            case 'CREDITS':
                return <Credits setRoute={setRoute} />;
            case 'DASHBOARD':
                return <Dashboard setRoute={setRoute} />;
        }
    }
    return (routeSwitch(route))
}
