/**
 * Filters pizzas based on search term.
 * @param {String} filterValue Current value of the filter to be applied 
 * @param {Array} list Array of data to be filtered
 */
export function filterList(filterValue, list) {
    // for each pizza listing, determine whether it should be displayed based on if it matches the search text
    return list.filter(item => item.match(new RegExp(filterValue, 'gi')))
}

/**
 * Sorts array data in reverse alphabetical order.
 * @param {Array} list Array of data to be sorted
 */
export function sortList(list) {
    // resort pizza listings to reverse alpha and append back into list
    return list.sort((a, b) => {
        // transforms the textContent to lower case for proper comparison
        return a.toLowerCase() > b.toLowerCase() ? -1 : 1
    })
}
