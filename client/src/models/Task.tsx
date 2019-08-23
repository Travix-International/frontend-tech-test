export interface Task {
  id: number;
  title: string;
  completed?: boolean;
  description?: string;
  category: string;
  selected?: boolean;
}
