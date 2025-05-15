export interface Pagination {
  page: number | null;
  size: number | null;
  total: number | null;
  next_page: string | null;
  prev_page: string | null;
}
