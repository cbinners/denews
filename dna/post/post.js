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
  remove(hash);
}

function postGet(hash) {
  return get(hash);
}

function validateCommit(entryName, entry, header, pkg, sources) {
  return true;
}

function validatePut(entryName, entry, header, pkg, sources) {
  return true;
}

function validateMod(entryName, entry, header, replaces, pkg, sources) {
  return false;
}

function validateDel(entryName, hash, pkg, sources) {
  return true;
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
