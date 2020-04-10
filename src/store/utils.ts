export const arrayToMap = (arr: any) =>
  arr.reduce((map: any, item: any) => {
    return {
      ...map,
      [item.id]: item,
    }
  }, {})
