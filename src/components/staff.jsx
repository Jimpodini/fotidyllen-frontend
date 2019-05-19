import React from 'react';
import Therapist from './Therapist';
import img_maria from '../images/maria.jpg';

const Staff = () => {
	return (
		<div className="row">
			<Therapist
				img={img_maria}
				title="Maria"
				text="Maria utför medicinsk fotvård och är auktoriserad fotterapeut samt utbildad undersköterska. Maria tar emot privatpersoner såväl som remitterade patienter. Hon är medlem i Sveriges Fotterapeuter och innehar därmed behandlingsskadeförsäkring."
			/>
		</div>
	);
};

export default Staff;
