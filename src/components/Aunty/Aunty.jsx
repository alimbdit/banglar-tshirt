import React from "react";
import "./Aunty.css";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ring}) => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin>Borhan</Cousin>
        <Cousin ring={ring} hasFriend={true}>Tufan</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
