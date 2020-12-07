// import { moduleGetters } from '@/store/ToDo/module'
// import CreateItem from '../../factories/itemFactory'

// describe('todo getters', () => {
//   describe('given store has assigned and unassigned items', () => {
//     const toDos = [
//       CreateItem(1, 1),
//       CreateItem(2, 2),
//       CreateItem(3, 1),
//     ]

//     describe('and assigned filter active', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': true,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return all assigned', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(2);

//         expect(result[0].id).toBe(1);
//         expect(result[0].assignedToUserId).toBe(1);
//         expect(result[1].id).toBe(3);
//         expect(result[1].assignedToUserId).toBe(1);
//       });
//     })

//     describe('and assigned filter inactive', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return both', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(3);
//       });
//     })
//   });

//   describe('given store has complete and incomplete items', () => {
//     const toDos = [
//       CreateItem(1, null, true),
//       CreateItem(2, null, false),
//       CreateItem(3, null, true),
//     ]

//     describe('and complete filter active', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': true,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return all completed', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(2);

//         expect(result[0].id).toBe(1);
//         expect(result[0].complete).toBe(true);
//         expect(result[1].id).toBe(3);
//         expect(result[1].complete).toBe(true);
//       });
//     })

//     describe('and complete filter inactive', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return both', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(3);
//       });
//     })
//   });
  
//   describe('given store has high and low priority items', () => {
//     const toDos = [
//       CreateItem(1, null, false, 2),
//       CreateItem(2, null, false, 1),
//       CreateItem(3, null, false, 3),
//     ]

//     describe('and high priority filter active', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': true,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return all high priority', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(2);

//         expect(result[0].id).toBe(1);
//         expect(result[0].priority).toBeGreaterThan(1);
//         expect(result[1].id).toBe(3);
//         expect(result[1].priority).toBeGreaterThan(1);
//       });
//     })

//     describe('and high priority filter inactive', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': false
//       }

//       it('when getting todos then return both', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(3);
//       });
//     })
//   });

//   describe('given store has different category items', () => {
//     const toDos = [
//       CreateItem(1, null, false, 1, 1),
//       CreateItem(2, null, false, 1, 2),
//       CreateItem(3, null, false, 1, 1),
//     ]

//     describe('and category filter has value of 1', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': '1'
//       }

//       it('when getting todos then return all in category 1', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(2);

//         expect(result[0].id).toBe(1);
//         expect(result[0].categoryId).toBe(1);
//         expect(result[1].id).toBe(3);
//         expect(result[1].categoryId).toBe(1);
//       });
//     })

//     describe('and category filter has value of null', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': null
//       }

//       it('when getting todos then return all', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(3);
//       });
//     })
//   });

//   describe('given store has many items', () => {
//     const toDos = [
//       CreateItem(1, 1, true, 2, 1),
//       CreateItem(2, 1, true, 2, 2),
//       CreateItem(3, 1, true, 1, 1),
//       CreateItem(4, 1, false, 2, 1),
//       CreateItem(5, 2, true, 1, 1),
//       CreateItem(6, 1, true, 2, 1)
//     ]

//     describe('and all filters are active', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': true,
//         'CompleteFilterModule/IsActive': true,
//         'HighPriorityFilterModule/IsActive': true,
//         'CategoryFilterModule/Selected': '1'
//       }

//       it('when getting todos then return all that match all filters', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(2);

//         expect(result[0].id).toBe(1);
//         expect(result[1].id).toBe(6);
//       });
//     })

//     describe('and all filters are inactive', () => {
//       const rootGetters = 
//       {
//         'AssignedFilterModule/IsActive': false,
//         'CompleteFilterModule/IsActive': false,
//         'HighPriorityFilterModule/IsActive': false,
//         'CategoryFilterModule/Selected': null
//       }

//       it('when getting todos then return all', () => {
//         const result = moduleGetters.ToDos({ toDos }, {}, {}, rootGetters);
      
//         expect(result.length).toBe(6);
//       });
//     })
//   });
// });
