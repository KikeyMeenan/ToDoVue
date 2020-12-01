import { Filter } from './genericFilterModule';
import CompleteFilterModule from './completeFilter';
import AssignedFilterModule from './assignedFilter';
import HighPriorityFilterModule from './highPriorityFilter';

export default [CompleteFilterModule, AssignedFilterModule, HighPriorityFilterModule] as Filter[];
