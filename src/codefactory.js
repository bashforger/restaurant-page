export default function codefactory( _type, _attr, _content, _parent_id ) {
  let node = document.createElement(_type);
  node.innerText = _content
  for (let attr in _attr) { node.setAttribute(attr, _attr[attr]) }
  document.getElementById(_parent_id).appendChild(node)
}