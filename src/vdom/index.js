import { clone, toLowerCase, isFunction, isString } from '../util';
import { isFunctionalComponent } from './functional-component';
import { getNodeType } from '../dom/index';


/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
export function isSameNodeType(node, vnode) {
	if (getNodeType(node)===3) return isString(vnode);
	if (isFunctionalComponent(vnode)) return true;
	let nodeName = vnode.nodeName;
	if (isFunction(nodeName)) return node._componentConstructor===nodeName;
	return toLowerCase(node.nodeName)===nodeName;
}



/** Reconstruct Component-style `props` from a VNode
 *	@todo: determine if it would be acceptible to drop the extend() clone here for speed
 *	@private
 */
export function getNodeProps(vnode) {
	let props = clone(vnode.attributes),
		c = vnode.children;
	if (c) props.children = c;
	return props;
}
