import React from 'react';

import EditableTimer from './EditableTimer.component.jsx';

const EditableTimerList = ({
	timers,
	onFormSubmit,
	onTrashClick,
	onStartClick,
	onStopClick,
}) => {
	const timersList = timers.map((timer) => (
		<EditableTimer
			key={timer.id}
			id={timer.id}
			title={timer.title}
			project={timer.project}
			elapsed={timer.elapsed}
			runningSince={timer.runningSince}
			onFormSubmit={onFormSubmit}
			onTrashClick={onTrashClick}
			onStartClick={onStartClick}
			onStopClick={onStopClick}
		/>
	));
	return <div id="timers">{timersList}</div>;
};

export default EditableTimerList;
