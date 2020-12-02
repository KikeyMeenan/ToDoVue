import { moduleGetters } from '@/store/ToDo/module'
import CreateItem from '../../factories/itemFactory'

describe('todo getters', () => {
  it('filters on assigned value', () => {
    const toDos = [
      CreateItem(1, 1),
      CreateItem(2, 2),
    ]
    const rootGetters = 
    {
      'AssignedFilterModule/IsActive': true,
      'CompleteFilterModule/IsActive': false,
      'HighPriorityFilterModule/IsActive': false,
      'CategoryFilterModule/Selected': false
    }
    
    const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);

    expect(result.length).toBe(1);
  });
});
