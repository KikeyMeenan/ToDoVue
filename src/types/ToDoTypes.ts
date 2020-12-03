interface Item {
  id: number;
  name: string;
  complete: boolean;
  priority: number;
  categoryId: number;
  description: string | null;
  completeBy: string | null;
  effort: number;
  createdByUserId: number;
  assignedToUserId: number | null;
  assignedByUserId: number | null;
  completedByUserId: number | null;
  createdDate: string;
  completedDate: string | null;
  assignedDate: string | null;
}

interface ItemSubmission {
  name: string;
  priority: number;
  categoryId: number;
  description: string | null;
  completeBy: string | null;
  effort: number;
  createdByUserId: number;
  assignedToUserId: number | null;
  assignedByUserId: number | null;
  createdDate: string;
  assignedDate: string | null;
}

interface Category {
  id: number;
  name: string;
}

interface CategorySubmission {
  name: string;
}

export { Item, Category, ItemSubmission, CategorySubmission }