import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                {props.url}
            </div>
            <Link to={`/portfolio/${props.slug}`}>link </Link>
        </div>
    )
}