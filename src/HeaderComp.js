import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComp = props => {
  return (
    <li className="dropdown">
      <Link to={'/Contact'}><b>{props.name}</b> <span><i className="fas fa-chevron-right"></i></span></Link>
      {/* TODO: make dropdowns show up if there is content */}
      {props.bodyTitle !== null ?? 
      <div className="dropdown-content">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{props.bodyTitle}</h3>
            {props.body}
          </div>
        </div>
      </div>}

    </li>
  )
}

export default HeaderComp


