import { Item } from '@/types/ToDoTypes';

export default(id: number, assignedToUserId: number) => {
  return {
    "id": id,
    "name": "some name",
    "complete": false,
    "priority": 1,
    "categoryId": 1,
    "description": null,
    "completeBy": null,
    "effort": 1,
    "createdByUserId": 1,
    "assignedToUserId": assignedToUserId,
    "assignedByUserId": null,
    "completedByUserId": null,
    "createdDate": "01/01/2000",
    "completedDate": null,
    "assignedDate": null
  } as Item
}