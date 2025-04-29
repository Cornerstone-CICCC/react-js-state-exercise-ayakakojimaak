import type React from "react";
import { useState } from "react";

const ClickCounter: React.FC = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button type="button" onClick={handleClick}>
				Click Counter
			</button>
			<div>Count: {count}</div>
		</div>
	);
};

export default ClickCounter;
