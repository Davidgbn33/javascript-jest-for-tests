import { checksSpecificValue, maxArray, orderAsc, removeDuplicate } from "./ex6";

describe('test6', () => {

    test('max in the table', () => {
      expect(maxArray([5, 8, 10])).toBe(10);
    });

    test('remove duplicate in the table', () => {
      expect(removeDuplicate(["orange","apple","apple"])).toEqual(["orange", "apple"]);
    });

    test('check a specific value in the table', () => {
        let a = [1, 2,3,5,6,70,8]
        let b = 6
      expect(checksSpecificValue(a, b)).toEqual(true);
    });

    test('order of table ASC', () => {
        let a = [ 9, 5 ,8, 4, 2]
        let b = [ 2, 4, 5, 8, 9]

        expect(orderAsc(a)).toEqual(b)
    })
  });