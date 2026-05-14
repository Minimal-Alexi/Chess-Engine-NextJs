import { Board } from "@/components/chess/Board";
import Image from "next/image";

const boardMap = [
  ['r','n','b','q','k','b','n','r'],
  ['p','p','p','p','p','p','p','p'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['P','P','P','P','P','P','P','P'],
  ['R','N','B','Q','K','B','N','R'],
]

export default function Home() {
  return (
    <main>
      <div className="container mx-auto m-8 p-4 justify-self-center-safe">
        <h1>Minimal Chess Engine</h1>
        <h2>A simple to use chess website, no fluff, no stress.</h2>
        <Board map={boardMap}/>
      </div>
    </main>
  )
}
