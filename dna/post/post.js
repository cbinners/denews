'use strict';

function genesis() {
  return true;
}

function postCreate(message) {
  var hash = commit('post', {
    content: message,
    timestamp: Date.now()
  });

  return hash;
}

function postDelete(hash) {
  return remove(hash);
}

function postUpdate(data) {
  debug(data);
  return update(
    'post',
    { content: data.update, timestamp: Date.now() },
    data.hash
  );
}

function postGet(hash) {
  return get(hash);
}

function validateCommit(entryName, entry, header, pkg, sources) {
  if (entryName === 'post') {
    if (entry.content.length < 5) {
      debug('Post is too short');
      return false;
    }
  }
  return true;
}

function validatePut(entryName, entry, header, pkg, sources) {
  return true;
}

function validateMod(entryName, entry, header, replaces, pkg, sources) {
  if (entryName === 'post') {
    var data = get(replaces, { GetMask: HC.GetMask.All });
    if (data.Sources[0] === sources[0]) {
      return true;
    }
  }
  return false;
}

function validateDel(entryName, hash, pkg, sources) {
  if (entryName === 'post') {
    var data = get(hash, { GetMask: HC.GetMask.All });
    if (data.Sources[0] === sources[0]) {
      return true;
    }
  }
  debug('Not authorized to delete');
  return false;
}

function validateLink(linkEntryType, baseHash, links, pkg, sources) {
  return false;
}

function validatePutPkg(entryName) {
  return null;
}

function validateModPkg(entryName) {
  return null;
}

function validateDelPkg(entryName) {
  return null;
}

function validateLinkPkg(entryName) {
  return null;
}
