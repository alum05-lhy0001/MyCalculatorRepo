import React, { useState } from "react";
import Calculator from "./Calculator";

export default function App() {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");

	// parseFloat returns NaN for empty/invalid input; we pass those through
	// Calculator will handle NaN gracefully.
	const parsed1 = parseFloat(num1);
	const parsed2 = parseFloat(num2);

	return (
		<div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", padding: 20 }}>
			<h1>Calculator</h1>

			<div style={{ marginBottom: 12 }}>
				<label style={{ marginRight: 8 }}>
					Number 1:
					<input
						type="text"
						value={num1}
						onChange={(e) => setNum1(e.target.value)}
						style={{ marginLeft: 8 }}
						placeholder=""
					/>
				</label>

				<label style={{ marginLeft: 12 }}>
					Number 2:
					<input
						type="text"
						value={num2}
						onChange={(e) => setNum2(e.target.value)}
						style={{ marginLeft: 8 }}
						placeholder=""
					/>
				</label>
			</div>

			<Calculator num1={parsed1} num2={parsed2} />
		</div>
	);
}
