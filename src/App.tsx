import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import PlayerTable from "./Components/PlayerTable";

function App() {
  return (
    <Grid
      templateAreas={`'header'
                      'content'`}
      templateRows={"100px 1fr"}
    >
      <GridItem bg={"coral"}>Header</GridItem>
      <GridItem bg={"lightblue"}>
        <Box paddingLeft={5} paddingRight={5}>
          <PlayerTable />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
