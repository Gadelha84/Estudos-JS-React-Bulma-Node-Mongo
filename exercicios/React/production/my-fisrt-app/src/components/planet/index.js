import React, { Fragment, useState, useEffect } from 'react';
import GrayImg from '../shared/gray_img/index'
import DescriptionWithLink from '../shared/DescriptionWithLink';
import Form from './form';

import { useParams, Link, useNavigate } from 'react-router-dom'

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({});
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        })
    }, [])

    const goToPlanets = () =>{
        navigate('/')
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    let title;
    if (planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>

    return (
        <div>
            {title}
            <DescriptionWithLink description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray}
            />
            <h4>Satélites</h4>
            <hr />
            <Form addSatellite={addSatellite}/>
            <hr />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type='button' onClick={goToPlanets}>Voltar a listagem!</button>
        </div>
    );
}

export default Planet;