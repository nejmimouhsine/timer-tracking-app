import React /* useEffect */ from 'react';
import helpers from '../helpers.js';

import TimerActionButton from './TimerActionButton.component.jsx';

const Timer = ({
	id,
	title,
	project,
	elapsed,
	runningSince,
	onEditClick,
	onTrashClick,
	onStartClick,
	onStopClick,
}) => {
	const elapsedString = helpers.renderElapsedString(elapsed, runningSince);
	const handleTrashClick = () => {
		onTrashClick(id);
	};

	// useEffect(() => {
	// 	const forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
	// 	return () => {
	// 		clearInterval(forceUpdateInterval);
	// 	};
	// }, []);

	const handleStartClick = () => {
		onStartClick(id);
	};

	const handleStopClick = () => {
		onStopClick(id);
	};

	return (
		<div className="ui centered card">
			<div className="content">
				<div className="header">{title}</div>
				<div className="meta">{project}</div>
				<div className="center aligned description">
					<h2>{elapsedString}</h2>
				</div>
				<div className="extra content">
					<span className="right floated edit icon" onClick={onEditClick}>
						<i className="edit icon" />
					</span>
					<span className="right floated trash icon" onClick={handleTrashClick}>
						<i className="trash icon" />
					</span>
				</div>
			</div>
			<TimerActionButton
				timerIsRunning={!!runningSince}
				onStartClick={handleStartClick}
				onStopClick={handleStopClick}
			/>
		</div>
	);
};

export default Timer;
