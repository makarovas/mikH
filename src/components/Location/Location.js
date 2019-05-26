import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15120.000616356865!2d37.54166556226161!3d55.71329760415632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b8719336f0f%3A0x65b83e6741430782!2z0KHRgtCw0LTQuNC-0L0g0JvRg9C20L3QuNC60Lg!5e0!3m2!1sru!2sru!4v1557167423250!5m2!1sru!2sru" width="100%"
				height="450"
				frameBorder="0"
				allowFullScreen></iframe>
			<div className='location_tag'>
				<div>
					Location
				</div>
			</div>
		</div>
	);
};

export default Location;