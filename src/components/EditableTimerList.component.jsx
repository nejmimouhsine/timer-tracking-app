import React from 'react';

import EditableTimer from './EditableTimer.component.jsx';

const EditableTimerList = () => {
	return (
		<div id="timers">
			<EditableTimer
				title="Learn React"
				project="web domination"
				elapsed="8986300"
				runningSince={null}
				editFormOpen={false}
			/>
			<EditableTimer
				title="Learn extreme ironing"
				project="world domination"
				elapsed="3890985"
				runningSince={null}
				editFormOpen={true}
			/>
		</div>
	);
};

export default EditableTimerList;
