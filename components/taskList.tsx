"use client";

import type { Task, TaskFilter } from "@/types/task";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "@/components/ui/card";
import TaskItems from "./taskItems";

interface TaskListProps {
  tasks: Task[];
  filter: TaskFilter;
}

export default function TaskList({ tasks, filter }: TaskListProps) {
  const [parent] = useAutoAnimate();
  const emptyMessages = {
    all: "You currently have no tasks. Add some tasks to get started!😊",
    active:
      "You currently have no Active tasks. Add some tasks to get started!😊",
    completed:
      "Oops🫢! You currently have no Completed tasks. Complete the active tasks to see your completed tasks. You've got this!💪",
  };

  if (tasks.length === 0) {
    return (
      <Card
        className="p-8 text-center text-muted-foreground bg-muted/30"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {emptyMessages[filter]}{" "}
      </Card>
    );
  }

  return (
    <ul ref={parent} className="space-y-3">
      {tasks.map((task, index) => (
        <li
          key={task.id}
          data-aos="fade-right"
          data-aos-delay={100 + index * 50}
        >
          <TaskItems task={task} />
        </li>
      ))}
    </ul>
  );
}
