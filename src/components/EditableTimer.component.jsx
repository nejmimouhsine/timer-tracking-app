import React from 'react';

import TimerForm from './TimerForm.component.jsx';
import Timer from './Timer.component.jsx';

const EditableTimer = ({
	title,
	project,
	editFormOpen,
	elapsed,
	runningSince,
}) =>
	editFormOpen ? (
		<TimerForm title={title} project={project} />
	) : (
		<Timer
			title={title}
			project={project}
			elapsed={elapsed}
			runningSince={runningSince}
		/>
	);

export default EditableTimer;
