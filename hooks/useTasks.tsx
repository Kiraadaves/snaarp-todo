"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task, TaskFilter } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "vibrant-tasks";

const getTasks = (): Task[] => {
  if (typeof window === "undefined") return [];

  const storedTasks = localStorage.getItem(STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasks = (tasks: Task[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const useGetTasks = (filter: TaskFilter = "all") => {
  //const queryClient = useQueryClient();

  const { data: allTasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    staleTime: Number.POSITIVE_INFINITY,
  });

  const tasks = allTasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return { tasks, allTasks };
};
export const useAddTask = () => {
  const queryClient = useQueryClient();

  const { mutate: addTask, isPending: isAdding } = useMutation({
    mutationFn: (newTaskData: { title: string }) => {
      const tasks = getTasks();
      const newTask: Task = {
        id: uuidv4(),
        title: newTaskData.title,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      const updatedTasks = [...tasks, newTask];
      saveTasks(updatedTasks);
      return Promise.resolve(newTask); // Return a Promise
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { addTask, isAdding };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: (updatedTask: Task) => {
      const tasks = getTasks();
      const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );

      saveTasks(updatedTasks);
      return Promise.resolve(updatedTask); // Return a Promise
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { updateTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId: string) => {
      const tasks = getTasks();
      const updatedTasks = tasks.filter((task) => task.id !== taskId);

      saveTasks(updatedTasks);
      return Promise.resolve(taskId); // Return a Promise
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { deleteTask };
};
