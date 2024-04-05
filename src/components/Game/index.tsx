"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/spinner";

const Game = () => {
  const [loading, setLoading] = useState(true);
  // const { push } = useRouter()
  // useEffect(() => {
  //   const token = sessionStorage.getItem('entity_token')
  //   if (!token) {
  //     push('/')
  //   }
  // }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      { loading ?<Spinner/> :(
      <div >
        <iframe
          title=" "
          src="https://i.simmer.io/@Tobby340602/ninjastake"
          style={{ width: "100%", height: "100vh" }}>
        </iframe>
      </div>
      )}
    </>
  );
};

export default Game;
