async function commit() {
  await logseq.Git.execCommand(['add', '*']);
  await logseq.Git.execCommand(['commit', '-m', 'Auto saved by Logseq']);
}
async function autoCommit() {
  try {
    await commit();
    logseq.App.showMsg('Committed successfully!');
  } catch (e) {
    logseq.App.showMsg(`Committed failed!\n${e.message}`, 'error');
    console.error(e);
  }
}
/**
 * entry
 */
function main () {
  commit();
  logseq.App.registerCommandShortcut({ binding: 'ctrl+s' }, () => {
    logseq.App.showMsg('Committing!', 'warning');
    autoCommit();
  }
  );
}

// bootstrap
logseq.ready(main).catch(err => logseq.App.showMsg(err, 'error'));
