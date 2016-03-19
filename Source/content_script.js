walk(document.body);

function walk(node)
{
  // I stole this function from here:
 // http://is.gd/mwZp7E

  var child, next;
//  console.log(tagName, 'tagName');

  if (!node || (node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))) {
    return;
  }

  console.log(node, 'node');
  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\bhome run(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHome run(s)?\b/g, "Ding dong Johnson$1");
  v = v.replace(/\bHome Run(s)?\b/g, "Ding Dong Johnson$1");

  v = v.replace(/\bhomerun(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHomerun(s)?\b/g, "Ding Dong Johnson$1");

  v = v.replace(/\bhomer(s)?\b/g, "ding dong Johnson$1");
  v = v.replace(/\bHomer(s)?\b/g, "Ding dong Johnson$1");

  v = v.replace(/\bHR(s|S)?\b/g, "DDJ$1");
  v = v.replace(/\bhr(s|S)?\b/g, "ddj$1");

  textNode.nodeValue = v;
}


