import React, { useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import CharacterDetails from "../components/CharactersDetails";

const CharactersDetailsPage = () => {
  const { character } = useLoaderData();

  useEffect(() => {
    document.title = `${character.name} | Marvel App`;
  }, [character]);

  return (
    <>
      <h2>{character.name}</h2>
      <CharacterDetails character={character} />
    </>
  );
}

