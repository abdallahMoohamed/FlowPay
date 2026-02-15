import { PopulateOptions } from 'mongoose';
import { SortOrder } from '../../../common/constants/sorting.constant';

export type GetAll = {
  limit?: number;
  skip?: number;
  paginate?: boolean;
  sort?: string;
  order?: SortOrder;
  fields?: string;
  lean?: boolean;
  populate?: PopulateOptions | (string | PopulateOptions)[];
};
