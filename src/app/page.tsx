import { BasicSetup } from "./kanban/BasicSetup";
import TestCounter from "./kanban/TestCounter";

export default function Home() {

  return (
    <main>
      <TestCounter />
      <div>
      <BasicSetup />
      </div>
    </main>
  );
}
