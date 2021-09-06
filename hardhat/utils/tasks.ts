import * as fs from "fs"
import * as path from "path"

export const TASKS_DIR = path.join(__dirname, "../tasks")

export function loadTasks() {
  const taskFiles = fs.readdirSync(TASKS_DIR)

  for (const file of taskFiles) {
    require(path.join(TASKS_DIR, file))
  }
}
