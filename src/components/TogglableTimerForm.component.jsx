import React from 'react';
import TimerForm from './TimerForm.component';

const TogglableTimerForm = ({ isOpen }) =>
	isOpen ? (
		<TimerForm />
	) : (
		<div className="ui basic content center aligned segment">
			<button className="ui basic button icon">
				<i className="plus icon" />
			</button>
		</div>
	);

export default TogglableTimerForm;
