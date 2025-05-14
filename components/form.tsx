"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { useAddTask } from "@/hooks/useTasks";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask, isAdding } = useAddTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({ title });
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Input
        type="text"
        placeholder="Add a new task...✍️"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border h-12 border-primary/20 focus-visible:ring-primary"
      />
      <Button
        type="submit"
        disabled={isAdding || !title.trim()}
        className="bg-primary h-12 hover:bg-primary/90 text-white"
      >
        <PlusCircle className="mr-1 h-4 w-4" />
        Add
      </Button>
    </form>
  );
}
