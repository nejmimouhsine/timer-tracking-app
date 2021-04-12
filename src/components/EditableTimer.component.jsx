import React, { useState } from 'react';

import TimerForm from './TimerForm.component.jsx';
import Timer from './Timer.component.jsx';

const EditableTimer = ({ id, title, project, elapsed, runningSince }) => {
	const [editFormOpen] = useState(false);

	if (editFormOpen) {
		return <TimerForm id={id} title={title} project={project} />;
	} else {
		return (
			<Timer
				id={id}
				title={title}
				project={project}
				elapsed={elapsed}
				runningSince={runningSince}
			/>
		);
	}
};

export default EditableTimer;
