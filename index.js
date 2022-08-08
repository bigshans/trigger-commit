async function autoCommit() {
  try {
    await logseq.Git.execCommand(['add', '*']);
    await logseq.Git.execCommand(['commit', '-c', '"Auto saved by Logseq"']);
    logseq.App.showMsg('Committed successfully!');
  } catch (e) {
    logseq.App.showMsg('Committed failed!');
    console.error(e);
  }
}
/**
 * entry
 */
function main () {
  autoCommit();
  logseq.App.registerCommandShortcut({ binding: 'ctrl+s' }, autoCommit);
}

// bootstrap
logseq.ready(main).catch(err => logseq.App.showMsg(err));
