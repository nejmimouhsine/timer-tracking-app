import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditableTimerList from '../components/EditableTimerList.component.jsx';
import TogglableTimerForm from '../components/TogglableTimerForm.component.jsx';

const TimerDashboard = () => {
	const timers = [
		{
			title: 'Practice squat',
			project: 'Gym Chores',
			id: uuidv4(),
			elapsed: 5456099,
			runningSince: Date.now(),
		},
		{
			title: 'Bake squash',
			project: 'Kitchen Chores',
			id: uuidv4(),
			elapsed: 1273998,
			runningSince: null,
		},
	];

	return (
		<div className="ui three column centered grid">
			<div className="column">
				<EditableTimerList timers={timers} />
				<TogglableTimerForm />
			</div>
		</div>
	);
};

export default TimerDashboard;
