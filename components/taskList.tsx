"use client";

import type { Task } from "@/types/task";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Card } from "@/components/ui/card";
import TaskItems from "./taskItems";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const [parent] = useAutoAnimate();

  if (tasks.length === 0) {
    return (
      <Card
        className="p-8 text-center text-muted-foreground bg-muted/30"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        You currently have no tasks. Add some tasks to get started!😊
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
