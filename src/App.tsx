const todos: Todo[] = [
  {
    id: 0,
    time: "04:00 - 05:00",
    description: "Weak + excise",
  },
  {
    id: 1,
    time: "05:00 - 12:00",
    description: "SPMED tasks",
  },
  {
    id: 2,
    time: "12:00 - 13:00",
    description: "Launch + sleep",
  },
  {
    id: 3,
    time: "13:00 - 16:00",
    description: "BEBICO tasks",
  },
  {
    id: 4,
    time: "16:00 - 20:00",
    description: "Đi chợ, ăn tối, tắm, nghỉ ngơi",
  },
  {
    id: 5,
    time: "20:00 - 21:00",
    description: "Học tiếng Anh",
  },
  {
    id: 6,
    time: "21:00 - 22:00",
    description: "Học tiếng Hàn",
  },
  {
    id: 7,
    time: "22:00 - 23:30",
    description: "Học công nghệ mới",
  },
];

function App() {
  const current = new Date().getTime();
  return (
    <div className="h-screen w-screen overflow-auto  p-4 flex flex-col gap-2 pb-10">
      {todos.map((todo) => {
        const [start, end] = todo.time.split(" - ");
        const startTime = new Date(current).setHours(
          Number(start.split(":")[0]),
          Number(start.split(":")[1])
        );
        const endTime = new Date(current).setHours(
          Number(end.split(":")[0]),
          Number(end.split(":")[1])
        );
        const active = startTime < current && current < endTime;
        return (
          <div
            key={todo.id}
            className="p-4 border-black border-2 relative"
            style={{ backgroundColor: active ? "#f3f4f6" : "" }}
          >
            <p className="text-gray-500 text-sm">{todo.time}</p>
            <p>{todo.description}</p>
            {active && (
              <div className="absolute top-2 right-2">
                <FluentEmojiHighContrastStar />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export const FluentEmojiFlatStar = (props: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FCD53F"
      d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"
    ></path>
  </svg>
);

export const FluentEmojiHighContrastStar = (props: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0"
    ></path>
  </svg>
);

interface Todo {
  id: number;
  time: string;
  description: string;
}

export default App;
