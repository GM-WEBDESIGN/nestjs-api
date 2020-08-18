import { Schema } from 'mongoose';
import { Prop } from '@typegoose/typegoose';

export class ApiImage {
  readonly _id: Schema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ default: { data: null, contentType: null } })
  image_file: {
    data: Buffer;
    contentType: string;
  };

  @Prop({ default: Date.now() })
  createdAt: Date;

  url: string;
}
