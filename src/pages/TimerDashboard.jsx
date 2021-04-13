import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import helpers from '../helpers.js';

import EditableTimerList from '../components/EditableTimerList.component.jsx';
import TogglableTimerForm from '../components/TogglableTimerForm.component.jsx';

const TimerDashboard = () => {
	const [timers, setTimers] = useState([
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
	]);

	const handleCreateFormSubmit = (timer) => {
		createTimer(timer);
	};

	const createTimer = (timer) => {
		const t = helpers.newTimer(timer);
		setTimers(timers.concat(t));
	};

	const handleEditFormSubmit = (attrs) => {
		updateTimer(attrs);
	};

	const updateTimer = (attrs) => {
		setTimers(
			timers.map((timer) => {
				if (timer.id === attrs.id) {
					return Object.assign({}, timer, {
						title: attrs.title,
						project: attrs.project,
					});
				} else {
					return timer;
				}
			})
		);
	};

	const handleTrashClick = (timerId) => {
		deleteTimer(timerId);
	};

	const deleteTimer = (timerId) => {
		setTimers(timers.filter((t) => t.id !== timerId));
	};

	const handleStartClick = (timerId) => {
		startTimer(timerId);
	};

	const startTimer = (timerId) => {
		const now = Date.now();
		setTimers(
			timers.map((timer) => {
				if (timer.id === timerId) {
					return Object.assign({}, timer, {
						runningSince: now,
					});
				} else {
					return timer;
				}
			})
		);
	};

	const handleStopClick = (timerId) => {
		stopTimer(timerId);
	};

	const stopTimer = (timerId) => {
		const now = Date.now();
		setTimers(
			timers.map((timer) => {
				if (timer.id === timerId) {
					const lastElapsed = now - timer.runningSince;
					return Object.assign({}, timer, {
						elapsed: timer.elapsed + lastElapsed,
						runningSince: null,
					});
				} else {
					return timer;
				}
			})
		);
	};

	return (
		<div className="ui three column centered grid">
			<div className="column">
				<EditableTimerList
					timers={timers}
					onFormSubmit={handleEditFormSubmit}
					onTrashClick={handleTrashClick}
					onStartClick={handleStartClick}
					onStopClick={handleStopClick}
				/>
				<TogglableTimerForm onFormSubmit={handleCreateFormSubmit} />
			</div>
		</div>
	);
};

export default TimerDashboard;
