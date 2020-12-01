import GenericFilter from './genericFilterModule';

export default GenericFilter('HighPriorityFilterModule', (item => item.priority > 1))
