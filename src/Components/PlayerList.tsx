import axios from "axios";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Player {
  id: number;
  first_name: string;
  last_name: string;
}

const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>();

  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((res) => {
        //console.log(res);
        setPlayers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr key={"header"}>
            <Th>Player</Th>
            <Th>Stats...</Th>
          </Tr>
        </Thead>
        <Tbody>
          {players &&
            players.map((player) => (
              <Tr key={player.id}>
                <Td>{player.first_name}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlayerList;
