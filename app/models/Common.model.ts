import { Model } from "objection";

export class CommonModel extends Model {
  readonly id!: number;

  created_at: Date;
  updated_at: Date;
  created_by: string;
  updated_by: string;

  is_active: boolean;
}
