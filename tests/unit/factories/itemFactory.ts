import { Item } from '@/types/ToDoTypes';

export default(
  id: number,
  assignedToUserId: number | null,
  isComplete: boolean = false,
  priority: number = 1,
  categoryId: number = 1
) => {
  return {
    id,
    "name": "some name",
    "complete": isComplete,
    priority,
    categoryId,
    "description": null,
    "completeBy": null,
    "effort": 1,
    "createdByUserId": 1,
    assignedToUserId,
    "assignedByUserId": null,
    "completedByUserId": null,
    "createdDate": "01/01/2000",
    "completedDate": null,
    "assignedDate": null
  } as Item
}