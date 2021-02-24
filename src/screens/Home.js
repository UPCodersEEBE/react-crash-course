import React from "react";
import TextAndDescription from "../components/TextAndDescription";

export default function Home() {
  return (
    <>
      <TextAndDescription
        title="Qui som?"
        text="UPCoders és una associació sense ànim de lucre formada per estudiants
        d'enginyeria que volen millorar els seus coneixements de programació
        desenvolupant projectes en diferents àmbits i llenguatges. Estem
        vinculats a la UPC (Universitat Politècnica de Catalunya) a l'EEBE."
      />
      <TextAndDescription
        title="Què fem?"
        text="Desenvolupem projectes de programació en diversos lleguatges, utiltizem
        des de Python fins aPHP, passant per Java. Degut a la gran varietat
        d'interessos de cada integrant, moltes vegades acabem aprenent els uns
        dels altres mentre desenvolupem un projecte. La nostra font
        d'aprenentatge sorgeix de la voluntat de resoldre un problema o
        necessitat que ens proposem al qual anomenem projecte i, aquells
        interessats en desenvolupar-ho ens posem a treballar en allò."
      />
      <TextAndDescription
        title="Com us podeu apuntar?"
        text=" És molt fàcil. Simplement us heu de posar en contacte amb nosaltres a
        través del correu electrònic, d'Instagram o omplint aquest formulari."
      />
    </>
  );
}
