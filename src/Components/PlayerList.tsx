import axios, { CanceledError } from "axios";
import { List, ListItem } from "@chakra-ui/react";
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
    <List>
      {players &&
        players.map((player) => (
          <ListItem key={player.id}>{player.first_name}</ListItem>
        ))}
    </List>
  );
};

export default PlayerList;
