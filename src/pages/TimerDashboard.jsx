import React from 'react';

import EditableTimerList from '../components/EditableTimerList.component.jsx';
import TogglableTimerForm from '../components/TogglableTimerForm.component.jsx';

const TimerDashboard = () => {
	return (
		<div className="ui three column centered grid">
			<div className="column">
				<EditableTimerList />
				<TogglableTimerForm isOpen={true} />
			</div>
		</div>
	);
};

export default TimerDashboard;
