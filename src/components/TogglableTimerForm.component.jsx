import React, { useState } from 'react';
import TimerForm from './TimerForm.component';

const TogglableTimerForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleFormOpen = () => setIsOpen(!isOpen);

	if (isOpen) {
		return <TimerForm />;
	} else {
		return (
			<div className="ui basic content center aligned segment">
				<button className="ui basic button icon" onClick={handleFormOpen}>
					<i className="plus icon" />
				</button>
			</div>
		);
	}
};

export default TogglableTimerForm;
