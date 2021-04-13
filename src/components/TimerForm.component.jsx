import React, { useState } from 'react';

const TimerForm = ({ id, title, project, onFormSubmit }) => {
	const submitText = id ? 'Update' : 'Create';
	const [timerTitle, setTimerTitle] = useState({ title: title || '' });
	const [timerProject, setTimerProject] = useState({ project: project || '' });

	const handleTimerTitleChange = (event) =>
		setTimerTitle({ title: event.target.value });
	const handleTimerProjectChange = (event) =>
		setTimerProject({ project: event.target.value });

	const handleSubmit = () => {
		onFormSubmit({
			title: timerTitle.title,
			project: timerProject.project,
		});
	};

	const onFormClose = () => {};

	return (
		<div className="ui centered card">
			<div className="content">
				<div className="ui form">
					<div className="field">
						<label>Title</label>
						<input
							type="text"
							value={timerTitle.title}
							onChange={handleTimerTitleChange}
						/>
					</div>

					<div className="field">
						<label>Project</label>
						<input
							type="text"
							value={timerProject.project}
							onChange={handleTimerProjectChange}
						/>
					</div>

					<div className="ui two bottom attached buttons">
						<button className="ui basic blue button" onClick={handleSubmit}>
							{submitText}
						</button>
						<button className="ui basic red button" onClick={onFormClose}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimerForm;
