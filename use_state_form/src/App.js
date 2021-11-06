import "./App.css";
import FeedbackForm from "./FeedbackForm";
import Form from "./Form";
import PromptValue from "./PromptValue";

function App() {
	return (
		<div className="App-header">
			<Form />
			<FeedbackForm />
			<PromptValue />
		</div>
	);
}

export default App;
