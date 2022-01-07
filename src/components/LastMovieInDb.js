import React from 'react'
import imagenFondo from "../assets/images/mandalorian.jpg";

export const LastMovieInDb = () =>  {
    
        return (
            <div>
                {/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-10 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
								<p>Los Mandalorianos eran un grupo cultural etnolingüístico predominantemente humano que se originó en el planeta Mandalore. Los Mandalorianos desempeñaron un papel particularmente único en la historia galáctica, y podían (...)</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}
            </div>
        )
}
