import type React from "react";
import { useState } from "react";

const LightToggle: React.FC = () => {
	const [isLightsOn, setIsLightsOn] = useState(true);

	const toggleLights = () => {
		setIsLightsOn((prevState) => !prevState);
	};

	return (
		<div
			style={{
				backgroundColor: isLightsOn ? "white" : "black",
				color: isLightsOn ? "black" : "white",
				height: "30vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<button
				type="button"
				onClick={toggleLights}
				style={{ padding: "10px 20px", fontSize: "16px" }}
			>
				Toggle Lights
			</button>
			<p>{isLightsOn ? "Lights are On" : "Lights are Off"}</p>
		</div>
	);
};

export default LightToggle;
