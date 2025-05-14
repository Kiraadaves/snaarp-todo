"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { TaskFilter } from "@/types/task";
import TaskForm from "./form";
import { useGetTasks } from "@/hooks/useTasks";

import TaskSummary from "./taskSummary";
import TaskList from "./taskList";

export default function TodoApp() {
  const [filter, setFilter] = useState<TaskFilter>("all");
  const { tasks } = useGetTasks(filter);
  const [parent] = useAutoAnimate();

  return (
    <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
      <Card className="border-none shadow-xl bg-white dark:bg-gray-800/90 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary rounded-t-lg">
          <CardTitle className="text-3xl md:text-4xl font-bold text-white py-6">
            My Todo App
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <TaskForm />

          <Tabs
            defaultValue="all"
            className="mt-8"
            onValueChange={(value) => setFilter(value as TaskFilter)}
          >
            <TabsList className="grid grid-cols-3 mb-6 w-full h-12">
              <TabsTrigger value="all">
                {" "}
                <span className={`${filter === "all" ? "text-[#fa0b4b]" : ""}`}>
                  All
                </span>{" "}
              </TabsTrigger>
              <TabsTrigger value="active">
                <span
                  className={`${filter === "active" ? "text-yellow-500" : ""}`}
                >
                  Active
                </span>
              </TabsTrigger>
              <TabsTrigger value="completed">
                <span
                  className={`${
                    filter === "completed" ? "text-green-600" : ""
                  }`}
                >
                  Completed
                </span>
              </TabsTrigger>
            </TabsList>

            <div ref={parent}>
              <TabsContent value="all" className="mt-0">
                <TaskList tasks={tasks} />
              </TabsContent>
              <TabsContent value="active" className="mt-0">
                <TaskList tasks={tasks} />
              </TabsContent>
              <TabsContent value="completed" className="mt-0">
                <TaskList tasks={tasks} />
              </TabsContent>
            </div>
          </Tabs>

          <TaskSummary />
        </CardContent>
      </Card>
    </div>
  );
}
