import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Create from '../Components/Create/Create'
import Loading from '../Components/Loading/Loading';

function CreatePage() {
    const [Load, setLoad] = useState(false);

    useEffect(() => {
        return () => {
            setLoad(true);
        }
    }, [])
    return (
        <Fragment>
            <Header />
            { Load ? <Loading /> : <Create /> }
            
        </Fragment>
    )
}

export default CreatePage;