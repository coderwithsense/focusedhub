import Image from "next/image";
import Todo from "./todo/page";
import Pomodoro from "./pomodoro/page";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="lg:flex">
        <div className="lg:w-2/3">
          <Pomodoro />
        </div>
        <div className="lg:w-1/3">
          <Todo />
        </div>
      </div>
    </div>
  );
}
