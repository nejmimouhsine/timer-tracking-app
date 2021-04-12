import React, { useState } from 'react';

const TimerForm = ({ title, project }) => {
	const submitText = title ? 'Update' : 'Create';
	const [timerTitle, setTimerTitle] = useState(title || '');
	const [timerProject, setTimerProject] = useState(project || '');

	const handleTimerTitleChange = (event) => setTimerTitle(event.target.value);
	const handleTimerProjectChange = (event) =>
		setTimerProject(event.target.value);

	return (
		<div className="ui centered card">
			<div className="content">
				<div className="ui form">
					<div className="field">
						<label>Title</label>
						<input
							type="text"
							value={timerTitle}
							onChange={handleTimerTitleChange}
						/>
					</div>

					<div className="field">
						<label>Project</label>
						<input
							type="text"
							value={timerProject}
							onChange={handleTimerProjectChange}
						/>
					</div>

					<div className="ui two bottom attached buttons">
						<button className="ui basic blue button">{submitText}</button>
						<button className="ui basic red button">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimerForm;
