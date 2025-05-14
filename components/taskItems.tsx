"use client";

import { useState } from "react";
import type { Task } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trash, Edit, Save, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDeleteTask, useUpdateTask } from "@/hooks/useTasks";

interface TodoItemProps {
  task: Task;
}

export default function TaskItems({ task }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();

  const handleToggleComplete = () => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim()) {
      updateTask({
        ...task,
        title: editedTitle,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Card
      className={cn(
        "p-4 gap-3 border-l-4 transition-all duration-300",
        task.completed
          ? "border-l-green-500 bg-green-50/50 dark:bg-green-900/10"
          : "border-l-primary bg-white dark:bg-gray-800"
      )}
    >
      <div className="flex justify-between items-center">
        <Checkbox
          checked={task.completed}
          onCheckedChange={handleToggleComplete}
          className="h-5 w-5 border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />

        {isEditing ? (
          <div className="flex-1 flex gap-2 ml-2">
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={handleSave}
              className="text-green-600"
            >
              <Save className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCancel}
              className="text-red-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <span
              className={cn(
                "flex-1 text-lg transition-all duration-300 ml-4",
                task.completed && "line-through text-muted-foreground"
              )}
            >
              {task.title}
            </span>

            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={handleEdit}
                className="text-primary hover:text-primary/80 hover:bg-primary/10"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleDelete}
                className="text-red-600 hover:text-red-700 hover:bg-red-100"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
