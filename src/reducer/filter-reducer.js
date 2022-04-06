export function filterReducer(filterState, action) {
  switch (action.type) {
    // case "SORT_BY_PRICE":
    //   return { ...state, sort: action.payload };
    case "CLEAR":
      return {
        categoryName: { men: false, women: false, kids: false },
        nofilter: true,
      };
    case "MEN":
      return {
        ...filterState,
        nofilter: false,
        categoryName: {
          ...filterState.categoryName,
          men: !filterState.categoryName.men,
        },
      };

    case "WOMEN":
      return {
        ...filterState,
        nofilter: false,
        categoryName: {
          ...filterState.categoryName,
          women: !filterState.categoryName.women,
        },
      };
    case "KIDS":
      return {
        ...filterState,
        nofilter: false,

        categoryName: {
          ...filterState.categoryName,
          kids: !filterState.categoryName.kids,
        },
      };

    default:
      return filterState;
  }
}
