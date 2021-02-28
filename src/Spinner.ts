import process from "process";
import readline from "readline";

class Spinner {
	private spinner: Array<string> = ["-", "\\", "|", "/"];
	private index: number;
	private timer: NodeJS.Timeout | undefined;

	constructor() {
		this.index = 0;
		this.timer = undefined;
	}

	private setIndex(index: number) {
		this.index = index;
	}

	private getSpinner(index: number): string | undefined {
		const spinner = this.spinner[index];

		if (spinner !== undefined) {
			return spinner;
		}

		this.setIndex(0);
		return this.spinner[this.index];
	}

	stop() {
		if (this.timer !== undefined) {
			clearInterval(this.timer);
			process.stdout.clearLine(1);
		}
	}

	spin(text: string) {
		// cursor is removed
		process.stdout.write("\x1B[?25l");

		const timer = setInterval(() => {
			const spin = this.getSpinner(this.index);

			if (spin !== undefined) {
				process.stdout.write(`${spin} ${text}`, "utf-8");

				readline.cursorTo(process.stdout, 0);

				this.setIndex(this.index >= this.spinner.length ? 0 : this.index + 1);
			}
		}, 100);

		this.timer = timer;
	}
}

export default Spinner;
