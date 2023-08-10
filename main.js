window.addEventListener("load", function () {
  const inputEvent = new Event('input', { bubbles: true });
  const changeEvent = new Event('change', { bubbles: true });

  const params = new URLSearchParams(location.search);

  async function proc() {
    await sendClick('button[name="職人モード(テキスト)"]');

    await sendClick('button[name="文字色"]');
    await setValue('.popover input', `#${params.get('color')}` ?? '#000000');
    await setValue('textarea[name="テキスト"]', params.get('text') ?? 'テキ\nスト');
    await setValue('input[name="その他のフォント"]', params.get('font') ?? "normal 1em 'Mplus1Bold'");
    if (params.get('gradient')) await sendClick('button[name="グラデーション"]');

    await sendClick('button[name="効果をつける"]');

    await setValue('select[name="切り抜き"]', params.get('clip') ?? 0);
    if (params.get('transparent')) await sendClick('button[name="背景色(透過)"]');

    await sendClick('button[name="効果をつける(戻る)"]');
  }

  proc();

  async function waitForElement(selector, callback) {
    if (document.querySelector(selector)) {
      callback(document.querySelector(selector));
      return;
    } else {
      setTimeout(() => {
        waitForElement(selector, callback);
      }, 100);
    }
  }

  async function setValue(selector, value) {
    return new Promise(resolve => {
      waitForElement(selector, (element) => {
        element.value = value;
        element.dispatchEvent(inputEvent);
        element.dispatchEvent(changeEvent);
      });
      resolve();
    });
  };

  async function sendClick(selector) {
    return new Promise(resolve => {
      waitForElement(selector, (element) => {
        element.click();
      });
      resolve();
    });
  };
});