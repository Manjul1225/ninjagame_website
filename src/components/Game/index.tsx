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
      src="https://i.simmer.io/@Tobby340602/ninjado"
      style={{ width: "100%", height: "1000px" }}>
    </iframe>
  </div>
  );
};

export default Game;
