import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import DisplayJohn from "./DisplayJohn";
import { JohnProfile } from "./DisplayJohn";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Button colorScheme="blue" size="lg">
          Button
        </Button>
        <Button colorScheme="red" size="sm">
          Button
        </Button>
        <Button colorScheme="green" size="md">
          Button
        </Button>
        <Button colorScheme="purple" size="xs"></Button>

        <Spinner color="red.500" size="xs" />
        <Spinner color="blue.500" size="sm" />
        <Spinner color="purple.500" size="md" />
        <Input variant="outline" placeholder="Enter amount" />
        <Input variant="filled" placeholder="Enter amount" />
        <Input variant="flushed" placeholder="Enter amount" />
      </ChakraProvider>
      <DisplayJohn />
      <JohnProfile />
    </div>
  );
}

export default App;
