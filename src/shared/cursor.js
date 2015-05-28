/*
  src/shared/cursor.js
  a cursor over immutable data
*/

import EventEmitter from 'events';
import oak from 'ancient-oak';

class Cursor extends EventEmitter {
  constructor(data, root, path) {
    super();
    if (data) { this.data = oak(data); }
    this.root = root || this;
    this.path = path;
  }

  deref() {
    let node = this.root.data;
    if (typeof node === 'function' && typeof node.dump === 'function') {
      if (this.path) {
        switch(typeof this.path) {
          case 'string':
            let keys = this.path.split('.');
            keys.forEach((k) => {
              node = node(k);
            });
            break;
          case 'number':
            node = node(this.path);
            break;
        }
      }
    }

    if (typeof node === 'function' && typeof node.dump === 'function') {
      return node.dump();
    } else {
      return node;
    }
  }

  get(path) {
    if (path) {
      return new Cursor(null, this, path);
    } else {
      return this;
    }
  }
}

export default Cursor;
