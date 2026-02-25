import { Schema, model, Types } from 'mongoose';

export interface ITask {
  _id?: string;
  title: string;
  completed: boolean;
  user: Types.ObjectId; // referencia a User
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const TaskModel = model<ITask>('Task', taskSchema);