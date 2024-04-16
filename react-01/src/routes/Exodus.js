import TopMenu from "../components/TopMenu";
import "./Exodus.css";

export default function Exodus() {
  console.log("hello")
  return (
    <div>
      <TopMenu />
      <h1>The Book of Exodus</h1>
      <p>
      The Book of Exodus is the second book of the Bible. 
      It is a narrative of the Exodus, the origin myth of the Israelites leaving slavery 
      in Biblical Egypt through the strength of their deity named 
      Yahweh, who according to the story chose them as his people. 
      The Israelites then journey with the legendary prophet Moses
       to Mount Sinai, where Yahweh gives the 10 commandments and
     they enter into a covenant with Yahweh, who promises to make
      them a "holy nation, and a kingdom of priests" on condition of 
      their faithfulness.
      </p>
    </div>
  );
}