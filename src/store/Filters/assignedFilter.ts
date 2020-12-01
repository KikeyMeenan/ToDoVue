import GenericFilter from './genericFilterModule';

export default GenericFilter('AssignedFilterModule', (item => item.assignedToUserId === 1))
