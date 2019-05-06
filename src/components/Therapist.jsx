import React from 'react';
import styled from 'styled-components';

const Therapist = ({ img }) => {
	return (
		<TherapistWrapper className="mx-auto px-3">
			<div className="card" style={{ width: '18rem' }}>
				<div className="img-container">
					<img className="card-img-top" src={img} alt="Card image cap" />
					<button className="btn btn-secondary book-btn">Boka</button>
				</div>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</TherapistWrapper>
	);
};

const TherapistWrapper = styled.div`
	.card:hover {
		border: 0.04rem solid rgba(0, 0, 0, 0.2);
		box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
	}

	.img-container {
		position: relative;
		overflow: hidden;
	}

	.card-img-top {
		transition: all 0.5s linear;
	}

	.img-container:hover .card-img-top {
		transform: scale(1.1);
	}

	.book-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 0.5s linear;
	}

	.img-container:hover .book-btn {
		transform: translate(0, 0);
		transition: all 0.5s linear;
	}
`;

export default Therapist;
