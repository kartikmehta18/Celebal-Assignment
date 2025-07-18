"use client"

import { useState, useEffect } from "react"

// Custom Input Component
const Input = ({ placeholder, value, onChange, onKeyDown, className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`input ${className}`}
      style={{
        padding: "12px 16px",
        border: "2px solid #e2e8f0",
        borderRadius: "8px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.2s",
        width: "100%",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
    />
  )
}

// Custom Button Component
const Button = ({ children, onClick, variant = "primary", size = "md", className = "", disabled = false }) => {
  const baseStyle = {
    padding: size === "sm" ? "8px 12px" : "12px 16px",
    border: "none",
    borderRadius: "8px",
    fontSize: size === "sm" ? "14px" : "16px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    opacity: disabled ? 0.6 : 1,
  }

  const variants = {
    primary: {
      backgroundColor: "#3b82f6",
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#6b7280",
      border: "1px solid #d1d5db",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#6b7280",
    },
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={(e) => {
        if (!disabled) {
          if (variant === "primary") {
            e.target.style.backgroundColor = "#2563eb"
          } else if (variant === "outline") {
            e.target.style.backgroundColor = "#f9fafb"
          } else if (variant === "ghost") {
            e.target.style.backgroundColor = "#f3f4f6"
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          if (variant === "primary") {
            e.target.style.backgroundColor = "#3b82f6"
          } else if (variant === "outline") {
            e.target.style.backgroundColor = "transparent"
          } else if (variant === "ghost") {
            e.target.style.backgroundColor = "transparent"
          }
        }
      }}
    >
      {children}
    </button>
  )
}

// Custom Checkbox Component
const Checkbox = ({ id, checked, onCheckedChange }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        style={{
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#3b82f6",
        }}
      />
    </div>
  )
}

// Custom Card Components
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children }) => {
  return <div style={{ padding: "24px 24px 0 24px" }}>{children}</div>
}

const CardTitle = ({ children, className = "" }) => {
  return (
    <h2 className={className} style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: "bold" }}>
      {children}
    </h2>
  )
}

const CardContent = ({ children }) => {
  return <div style={{ padding: "24px" }}>{children}</div>
}

// Custom Icons
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6"></polyline>
    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
)

export default function TodoApp() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks")
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks).map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }))
        setTasks(parsedTasks)
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      }
      setTasks([task, ...tasks])
      setNewTask("")
    }
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
        padding: "16px",
      }}
    >
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <Card>
          <CardHeader>
            <div style={{ textAlign: "center" }}>
              <CardTitle style={{ color: "#1f2937" }}>My Todo List</CardTitle>
              <p style={{ color: "#6b7280", margin: "8px 0 0 0" }}>
                {totalCount === 0
                  ? "No tasks yet. Add one below!"
                  : `${completedCount} of ${totalCount} tasks completed`}
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Add new task */}
              <div style={{ display: "flex", gap: "8px" }}>
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTask()
                    }
                  }}
                />
                <Button onClick={addTask}>
                  <PlusIcon />
                </Button>
              </div>

              {/* Clear completed button */}
              {completedCount > 0 && (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="outline" size="sm" onClick={clearCompleted} style={{ color: "#dc2626" }}>
                    Clear Completed ({completedCount})
                  </Button>
                </div>
              )}

              {/* Tasks list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                {tasks.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "32px 0", color: "#6b7280" }}>
                    <p style={{ fontSize: "18px", margin: "0 0 8px 0" }}>No tasks yet!</p>
                    <p style={{ fontSize: "14px", margin: "0" }}>Add your first task above to get started.</p>
                  </div>
                ) : (
                  tasks.map((task) => (
                    <div
                      key={task.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        backgroundColor: task.completed ? "#f9fafb" : "white",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompletion(task.id)}
                        />
                        <label
                          htmlFor={`task-${task.id}`}
                          style={{
                            cursor: "pointer",
                            flex: 1,
                            color: task.completed ? "#6b7280" : "#1f2937",
                            textDecoration: task.completed ? "line-through" : "none",
                          }}
                        >
                          {task.text}
                        </label>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                          {task.createdAt.toLocaleDateString()}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTask(task.id)}
                          style={{ color: "#ef4444" }}
                        >
                          <TrashIcon />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
