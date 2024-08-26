"use client";

import { useState } from "react";

import Model from "./Model";
import Settings from "./Settings";
import Tokens from "./Tokens";

const HeroSection = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openTokenOne, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <main className="w-2/5 mx-auto bg-slate-50 p-5 rounded-xl shadow-md mt-20">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Swap</h1>
        <Settings />
      </section>
      <section className="mt-2 flex gap-1">
        <input
          type="number"
          placeholder="0"
          className="input input-bordered w-full"
        />
        <Tokens
          tokenOne={tokenOne}
          setTokenOne={setTokenOne}
          buttonToken="one"
        />
      </section>
      <section className="mt-2 flex gap-1">
        <input
          type="number"
          placeholder="0"
          className="input input-bordered w-full"
        />
        <Tokens
          tokenTwo={tokenTwo}
          setTokenTwo={setTokenTwo}
          buttonToken="two"
        />
      </section>
      <section className="mt-2 w-full">
        <Model />
      </section>
    </main>
  );
};

export default HeroSection;
