import React from 'react';

import TimerDashboard from './pages/TimerDashboard.jsx';

const App = () => {
	return (
		<div className="main ui">
			<h1 className="ui dividing centered header">Timers</h1>
			<TimerDashboard />
		</div>
	);
};

export default App;
