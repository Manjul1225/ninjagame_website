"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Game = () => {
  const { push } = useRouter()
  useEffect(() => {
    const token = sessionStorage.getItem('entity_token')
    if (!token) {
      push('/')
    }
  }, []);

  return (
    <div >
    <iframe
      title=" "
      src="https://i.simmer.io/@Tobby340602/ninjastake"
      style={{ width: "100%", height: "100vh" }}>
    </iframe>
  </div>
  );
};

export default Game;
