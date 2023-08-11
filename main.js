window.addEventListener("load", function () {
  const inputEvent = (value) => new Event('input', { bubbles: false, value: value });
  const changeEvent = (value) => new Event('change', { bubbles: true, target: { value: value } });

  const params = new URLSearchParams(location.search);

  async function proc() {
    await sendClick('button[name="職人モード(テキスト)"]');

    await sendClick('button[name="文字色"]');
    await setValue('.popover input', `#${params.get('color')}` ?? '#000000');
    await setValue('textarea[name="テキスト"]', params.get('text').replace("\\n", "\n") ?? 'テキ\nスト');
    await setValue('input[name="その他のフォント"]', params.get('font') ?? "normal 1em 'Mplus1Bold'");
    if (params.get('gradient') != null) await sendClick('button[name="グラデーション"]');

    await sendClick('button[name="効果をつける"]');

    await setValue('select[name="切り抜き"]', params.get('clip') ?? 0);
    if (params.get('transparent') != null) await sendClick('button[name="背景色(透過)"]');

    await sendClick('button[name="職人モード(効果)"]');

    if (params.get('size') != null) await sendClick('button[name="画像サイズ自動"]');
    await setValue('div:has(button[name="画像サイズ自動"])+div>div>input.number', params.get('size') ?? 128);

    await sendClick('button[name="効果をつける(戻る)"]');
  }

  proc();

  async function waitForElement(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
      } else {
        setTimeout(() => {
          waitForElement(selector);
        }, 100);
      }
    });
  }

  async function setValue(selector, value) {
    return new Promise(resolve => {
      waitForElement(selector).then(element => {
        element.value = value;
        element.dispatchEvent(inputEvent(value));
        element.dispatchEvent(changeEvent(value));
        setTimeout(() => {
          resolve();
        }, 100);
      });
    });
  };

  async function sendClick(selector) {
    return new Promise(resolve => {
      waitForElement(selector).then(element => {
        element.click();
        setTimeout(() => {
          resolve();
        }, 100);
      });
    });
  };
});