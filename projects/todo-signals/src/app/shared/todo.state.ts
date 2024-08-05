export interface TodoItem {
  id: number;
  checked: boolean;
  description: string;
  lastModified: Date;
}

export interface TodoChecked {
  item: TodoItem;
  checked: boolean;
}
