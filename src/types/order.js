/**
 * @typedef {Object} OrderOption
 *
 * @property {number} option_id
 */

/**
 * @typedef {Object} OrderItem
 *
 * @property {number} menu_id
 * @property {number} quantity
 * @property {string} extra_requests
 * @property {OrderOption[]} options
 */

/**
 * @typedef {Object} OrderCreate
 *
 * @property {number} restaurant_id
 * @property {OrderItem[]} order_items
 */

export {};
