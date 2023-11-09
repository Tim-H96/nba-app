import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={`'header'
                      'content'`}
      templateRows={"100px 1fr"}
    >
      <GridItem bg={"coral"}>Header</GridItem>
      <GridItem bg={"blue"}>Content</GridItem>
    </Grid>
  );
}

export default App;
