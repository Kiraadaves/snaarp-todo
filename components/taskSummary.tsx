"use client";

import { Card } from "@/components/ui/card";
import { useGetTasks } from "@/hooks/useTasks";
import { CheckCircle, CircleDot, ListTodo } from "lucide-react";

export default function TaskSummary() {
  const { allTasks } = useGetTasks("all");

  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  if (totalTasks === 0) return null;

  return (
    <Card
      className="mt-6 p-6 bg-muted/30 flex justify-between text-sm"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 className="text-center font-medium text-destructive md:text-xl">Summary</h2>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <ListTodo className="h-4 w-4 text-primary" />
          <p className="text-sm md:text-lg">
            <span className="hidden md:inline font-bold">Total:</span>{" "}
            <span className="text-black md:text-[#fa0b4b]">{totalTasks}</span>
          </p>
        </div>

              <div className="flex items-center gap-2">
                  
          <CircleDot className="h-4 w-4 text-primary" />
          <p className="text-sm md:text-lg ">
            <span className="hidden md:inline font-bold">Active:</span>{" "}
            <span className="text-black md:text-yellow-500">{activeTasks}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <p className="text-sm md:text-lg">
            <span className="hidden md:inline font-bold">Completed:</span>{" "}
            <span className="text-black md:text-green-600">
              {completedTasks}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}
