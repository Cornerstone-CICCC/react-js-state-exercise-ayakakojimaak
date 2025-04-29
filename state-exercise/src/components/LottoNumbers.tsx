import type React from "react";
import { useState } from "react";

const LottoNumbers: React.FC = () => {
	const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

	const generateLottoNumbers = () => {
		const numbers = Array.from(
			{ length: 7 },
			() => Math.floor(Math.random() * 50) + 1,
		);
		setLottoNumbers(numbers);
	};

	return (
		<div>
			<button type="button" onClick={generateLottoNumbers}>
				Generate Lotto Numbers
			</button>
			<div>
				{lottoNumbers.length > 0 && (
					<p>Lotto Numbers: {lottoNumbers.join(", ")}</p>
				)}
			</div>
		</div>
	);
};

export default LottoNumbers;
