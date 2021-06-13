import { PhotoFeed } from "./components/PhotoFeed";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App mx-20 ">
      <PhotoFeed />
    </div>
  );
}

export default App;
