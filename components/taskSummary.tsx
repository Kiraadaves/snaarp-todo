"use client"

import { Card } from "@/components/ui/card"
import { useGetTasks } from "@/hooks/useTasks"
import { CheckCircle, Circle, ListTodo } from "lucide-react"

export default function TodoSummary() {
  const { allTasks } = useGetTasks("all")

  const totalTasks = allTasks.length
  const completedTasks = allTasks.filter((task) => task.completed).length
  const activeTasks = totalTasks - completedTasks

  if (totalTasks === 0) return null

  return (
    <Card
      className="mt-6 p-4 bg-muted/30 flex justify-between items-center text-sm"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="flex items-center gap-2">
        <ListTodo className="h-4 w-4 text-primary" />
        <span>Total: {totalTasks}</span>
      </div>

      <div className="flex items-center gap-2">
        <Circle className="h-4 w-4 text-primary" />
        <span>Active: {activeTasks}</span>
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <span>Completed: {completedTasks}</span>
      </div>
    </Card>
  )
}
