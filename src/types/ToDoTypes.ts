interface Item {
  id: number;
  name: string;
  complete: boolean;
  priority: number;
  categoryId: number;
  description: string;
  completeBy: string;
  effort: number;
  createdByUserId: number;
  assignedToUserId: number;
  assignedByUserId: number;
  completedByUserId: number;
  createdDate: string;
  completedDate: string;
  assignedDate: string;
}

interface Category {
  id: number;
  name: string;
}

export { Item, Category }