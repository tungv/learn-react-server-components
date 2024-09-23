import StateProvider from "./state";
import Tab from "./Tab";
import ToggleTab from "./ToggleTab";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-12">
      <h1 className="text-2xl font-bold">
        Client state on server data example
      </h1>

      <StateProvider>
        <ToggleTab
          labelNode={
            <>
              <Tab tabName="default">showing default</Tab>
              <Tab tabName="secondary">showing secondary</Tab>
            </>
          }
        />
        <Tab tabName="default">
          <DefaultContent />
        </Tab>
        <Tab tabName="secondary">
          <SecondaryContent />
        </Tab>
      </StateProvider>
    </main>
  );
}

function DefaultContent() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h1>default content</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quidem
        magni deleniti maiores modi saepe quae harum sunt soluta ea delectus qui
        sit sapiente asperiores, possimus laboriosam aspernatur odit optio.
      </p>
    </div>
  );
}

function SecondaryContent() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h1>secondary content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
}
